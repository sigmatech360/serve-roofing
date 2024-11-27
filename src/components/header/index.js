import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Assets/images/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiDollar } from "react-icons/ci";

function Header() {
  return (
    <>
      <header className="header bg-dark py-2">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <i className="bi bi-house-door-fill text-white fs-3 me-2"></i>
            <div>
              {/* <h1 className="text-white m-0 fs-6">serve</h1>
              <span className="text-white-50">ROOFING</span> */}
              <img src={logo} className="img-fluid logoimg " />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-grow-1 mx-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
          </div>

          {/* Buttons and Contact */}
          <div className="d-flex align-items-center">
            {/* Roof Financing */}
            <button className="btn btn-warning me-2 d-flex align-items-center">
              <span className="d-flex align-items-center">
                {" "}
                <CiDollar />{" "}
              </span>
              Roof Financing
            </button>

            {/* Contact Number */}
            <div className="text-white me-2 d-flex align-items-center">
              <i className="bi bi-telephone-fill me-1"></i>
              <span>713-577-9297</span>
            </div>

            {/* Free Estimate */}
            <button className="btn btn-info d-flex align-items-center">
              <i className="bi bi-clipboard me-1"></i> Free Estimate
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
