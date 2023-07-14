import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Navigation from "../inc/navigation";

function Home() {
  return (
    <div className="bg-dark text-white">
      <Navigation />
      <Container className="d-flex justify-content-center">
        <div>
          <h1 className="text-xl-center">
            Manage your data to get results in one click
          </h1>
        </div>

        <div xs={6} md={4}>
          <Image src="../images/welcome.jpg" roundedCircle />
        </div>
      </Container>
      <section>
        <div class="container-md msg my-3">
          <p class="fedlearn">
            Brain tumor prediction can be acheived by leveraging the data
            available across multiple healthcare institutions. Instead of
            centralizing all the data in one location, federated learning allows
            each institution to keep its patient data locally.
            <span id="dots"></span>
            <span id="more">
              Discover the power of collaboration and privacy-aware machine
              learning in brain tumor prediction.
            </span>
          </p>
          <button onclick="readMore()" type="button" id="readmore">
            Read more
          </button>
        </div>
      </section>

      <section>
        <div class="container-md msg my-3">
          <p class="fedlearn">
            Brain tumor prediction can be acheived by leveraging the data
            available across multiple healthcare institutions. Instead of
            centralizing all the data in one location, federated learning allows
            each institution to keep its patient data locally.
            <span id="dots"></span>
            <span id="more">
              Discover the power of collaboration and privacy-aware machine
              learning in brain tumor prediction.
            </span>
          </p>
          <button onclick="readMore()" type="button" id="readmore">
            Read more
          </button>
        </div>
      </section>

      <section>
        <div class="container functions">
          <h1>What are you looking for?</h1>
          <div class="row text-center">
            <div class="col-4">
              <a href="">
                <img src="images/Ellipse 3.png" class="fnbtn" />

                <div class="centered">Block addition</div>
              </a>
            </div>
            <div class="col-4">
              <a href="">
                <img src="images/Ellipse 4.png" class="fnbtn" />

                <div class="centered">Data Analytics</div>
              </a>
            </div>
            <div class="col-4">
              <a href="">
                <img src="images/Ellipse 5.png" class="fnbtn" />

                <div class="centered">Create NFTs</div>
              </a>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-4">
              <a href="">
                <img src="images/Ellipse 6.png" class="fnbtn" />

                <div class="centered">Smart Contracts</div>
              </a>
            </div>
            <div class="col-4">
              <a href="">
                <img src="images/Ellipse 7.png" class="fnbtn" />

                <div class="centered">View Audit Trails</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
