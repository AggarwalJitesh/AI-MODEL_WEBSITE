import Rechart from "../inc/rechart";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container-fluid row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <div className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <Link to="/" className="fs-5 d-none d-sm-inline text-white">
              PredicativeTechnology
            </Link>
          </div>

          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li>
              <button type="button" class="btn btn-dark">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </button>
            </li>

            <li class="nav-item">
              <button type="button" class="btn btn-dark">
                <Link to="/upload" className="nav-link text-white">
                  Upload
                </Link>
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-dark">
                <Link to="/" className="nav-link text-white">
                  Analysis
                </Link>
              </button>
            </li>
          </ul>
          <hr />
          <div class="dropdown pb-4">
            <a
              href="#"
              class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="hugenerd"
                width="30"
                height="30"
                class="rounded-circle"
              />
              <span class="d-none d-sm-inline mx-1">User 1</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <a class="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col py-3">
        <Rechart />
      </div>
    </div>
  );
}

export default Dashboard;
