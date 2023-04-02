import React, { Component } from "react";
import Greet from "./propComp";
// document.querySelector("body").style.backgroundColor="white"
class Navcomp extends Component {
  constructor() {
    super();
    this.state = {
      disDL: "navbar navbar-expand-lg navbar-light",
      navStyle: { backgroundColor: "#95cff8" },
      disButt: "Dark",
      disIcon: "bi bi-brightness-high-fill",
      disStyle: "btn btn-dark",
      rootColor: (document.querySelector("body").style.backgroundColor =
        "white"),
      // fCol: (document.querySelector("h1").style.color = "black"),
    };
  }
  visMode() {
    if (this.state.disDL === "navbar navbar-expand-lg navbar-light") {
      this.setState({
        disDL: "navbar navbar-expand-lg navbar-dark bg-dark",
        navStyle: null,
        disButt: "Light",
        disIcon: "bi bi-moon-stars-fill",
        disStyle: "nav-item btn btn-light",
        rootColor: (document.querySelector("body").style.backgroundColor =
          "#333"),
        fCol: (document.querySelector("h1").style.color = "white"),
      });
    } else {
      this.setState({
        disDL: "navbar navbar-expand-lg navbar-light",
        navStyle: { backgroundColor: "#95cff8" },
        disButt: "Dark",
        disIcon: "bi bi-brightness-high-fill",
        disStyle: "btn btn-dark",
        rootColor: (document.querySelector("body").style.backgroundColor =
          "white"),
        fCol: (document.querySelector("h1").style.color = "black"),
      });
    }
  }

  render() {
    // console.log(document.querySelector("h1").style.color);
    return (
      <>
        <nav className={this.state.disDL} style={this.state.navStyle}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Hematite
            </a>
            {/* <div className="mx-auto"> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Courses
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item ms-4">
                  <button
                    className={this.state.disStyle}
                    onClick={() => this.visMode()}
                  >
                    <i className={this.state.disIcon}></i>&emsp;
                    {this.state.disButt}
                  </button>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </div>
        </nav>
      </>
    );
  }
}
export default Navcomp;