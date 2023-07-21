import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3 "
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                alt=""
                src={require("../images/logo.png")}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              <Link to="/" className="text-white">
                PredicativeTechnology
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link>
                    <Link to="/about" className="nav-link text-white">
                      About Us
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/news" className="nav-link text-white">
                      News and Resources
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/customers" className="nav-link text-white">
                      Our Customers
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/login" className="nav-link text-white">
                      Log In
                    </Link>
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation;
