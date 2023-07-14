import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import CloseButton from "react-bootstrap/CloseButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navigation from "../inc/navigation";
import * as tf from "@tensorflow/tfjs";
import { loadGraphModel } from "@tensorflow/tfjs-converter";
import { useState, useEffect } from "react";
import * as jpeg from "jpeg-js";

function Upload() {
  const [isUploaded, setIsUploaded] = useState(false);
  const [ImageURL, setImageURL] = useState(null);
  //const [model, setModel] = useState(null);
  const [Result, setResult] = useState("");
  const CLASS_NAMES = [
    "glioma_tumor",
    "meningioma_tumor",
    "no_tumor",
    "pituitary_tumor",
  ];

  const handleChange = (event) => {
    //setImageURL(URL.createObjectURL(event.target.files[0]));
    setImageURL(
      "https://github.com/AggarwalJitesh/AI-MODEL_WEBSITE/blob/main/image(1).jpg"
    );
    console.log(ImageURL);
  };

  function imageToTensor(rawImageData) {
    const TO_UINT8ARRAY = true;
    const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0;
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];
      offset += 4;
    }
    return tf.tensor3d(buffer, [height, width, 3]);
  }

  const onUpload = async () => {
    const model = await tf.loadLayersModel(
      "https://raw.githubusercontent.com/AggarwalJitesh/AI-MODEL_WEBSITE/main/model.json"
    );
    console.log("1");
    const response = ImageURL;
    console.log("2");
    const imageData = await response.arrayBuffer();
    console.log("3");
    const imageTensor = imageToTensor(imageData);
    console.log("4");
    const prediction = model.predict(imageTensor)[0];
    console.log("5");
    setResult(prediction);
    setIsUploaded(true);
  };

  const notUpload = () => {
    setIsUploaded(false);
  };

  return (
    // <Form onSubmit={handleSubmit}>
    <div className="app">
      <Navigation />
      {!isUploaded && (
        <div className="app-wrapper">
          <Container>
            <h2>Upload Image</h2>
            <Form>
              <Form.Group className="position-relative mb-3">
                <Form.Label>File</Form.Label>
                <Form.Control type="file" onChange={handleChange} />
              </Form.Group>
              <img src={ImageURL} />
              <Button className="app-button" onClick={onUpload}>
                Go to Image Optimisation
              </Button>
            </Form>
          </Container>
        </div>
      )}

      {isUploaded && (
        <div className="app-wrapper">
          <Container>
            <div className="app-result">
              <span>Result: </span>
              {Result}
            </div>
            <CloseButton onClick={notUpload} />
          </Container>
        </div>
      )}
    </div>
  );
}

export default Upload;
