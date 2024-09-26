import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#B8001F",
    boxShadow: "none",
    height: "80px", // Set the desired height
    display: "flex",
    alignItems: "center", // Vertically center the content
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top" style={navbarStyle}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ maxHeight: "100px", maxWidth: "240px" ,marginLeft:"80px"}} // Adjust logo size if needed
            />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/Todo"
                className="nav-link active"
                aria-current="page"
                style={{ color: "white" }}
              >
                Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Genre"
                className="nav-link active"
                aria-current="page"
                style={{ color: "white" }}
              >
                Genre
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav me-5">
            <li className="nav-item">
              <Link
                to="/Login"
                className="nav-link active"
                aria-current="page"
                style={{ color: "white" }}
              >
                Login/Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
