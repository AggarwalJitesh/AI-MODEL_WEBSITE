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
          <img
            src={require("../images/welcome.png")}
            class="d-block w-100"
            alt="..."
          />
        </div>
      </Container>
      <section>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../images/b1.jpeg")}
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("../images/b2.png")}
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("../images/b3.png")}
                class="d-block w-100"
                alt="..."
              />{" "}
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section>
        <div class="container functions">
          <h1>What are you looking for?</h1>
          <div class="row text-center">
            <div class="col-4">
              <a href="">
                <img
                  src={require("../images/Ellipse 3.png")}
                  class="fnbtn"
                  alt="..."
                />
                <div class="centered">Block addition</div>
              </a>
            </div>
            <div class="col-4">
              <a href="">
                <img
                  src={require("../images/Ellipse 4.png")}
                  class="fnbtn"
                  alt="..."
                />
                <div class="centered">Data Analytics</div>
              </a>
            </div>
            <div class="col-4">
              <a href="">
                <img
                  src={require("../images/Ellipse 5.png")}
                  class="fnbtn"
                  alt="..."
                />
                <div class="centered">Create NFTs</div>
              </a>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-4">
              <a href="">
                <img
                  src={require("../images/Ellipse 6.png")}
                  class="fnbtn"
                  alt="..."
                />
                <div class="centered">Smart Contracts</div>
              </a>
            </div>
            <div class="col-4">
              <a href="">
                <img
                  src={require("../images/Ellipse 7.png")}
                  class="fnbtn"
                  alt="..."
                />
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
