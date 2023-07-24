from flask import Flask, request, jsonify, session
from flask_cors import CORS, cross_origin

from werkzeug.utils import secure_filename
from keras.models import load_model
from keras.utils import img_to_array
import numpy as np
import cv2
import os
from PIL import Image
from os.path import join, dirname, realpath

#UPLOAD_FOLDER = os.path.join('static', 'uploads')
UPLOAD_FOLDER = join(dirname(realpath(__file__)), 'static/uploads/')

# Define allowed files
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.secret_key = 'This is your secret key to utilize session in Flask'
cors = CORS(app, resources={r"/upload": {"origins": "http://localhost:3000"}})
app.config['CORS_HEADERS'] = 'Content-Type'

model = load_model("/Users/jiteshaggarwal/Downloads/model.h5")

def predict_result(predict):
    #predict = "/Users/jiteshaggarwal/Downloads/archive/Testing/no_tumor/image(62).jpg"
    img = cv2.imread(predict)
    img = cv2.resize(img, (150,150))
    img_array = np.array(img)
    img_array = img_array.reshape(1,150,150,3)
    a = model.predict(img_array) # a is the probability array
    indices = a.argmax()
    labels = ['glioma_tumor', 'meningioma_tumor', 'no_tumor', 'pituitary_tumor']
    return labels[indices]


@app.route('/')
def home():
    return"hello"

@app.route('/upload', methods=['POST','OPTIONS'])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    uploaded_img = request.files['image']


    img_filename = secure_filename(uploaded_img.filename)
    # Upload file to database (defined uploaded folder in static path)
    uploaded_img.save(os.path.join(app.config['UPLOAD_FOLDER'], img_filename))
    img = os.path.join(app.config['UPLOAD_FOLDER'], img_filename)
    session['uploaded_img_file_path'] = os.path.join(app.config['UPLOAD_FOLDER'], img_filename)
    img_file_path = session.get('uploaded_img_file_path', None)

    print(img)


    #img = preprocess_img(file)
    pred = predict_result(img_file_path)
    # Now, you can process the image as you wish (e.g., save it, analyze it, etc.)

    return jsonify({'message': str(pred)})

if __name__ == '__main__':
    app.run(debug=True)