import React, { Component } from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
class CarouselComp extends Component {
  render() {
    return (
      <div className="d-flex justify-content-evenly">
        <div
          id="carouselExampleControls"
          className="carousel slide mt-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner d-flex justify-content-around">
            <div className="carousel-item active">
              <img src={img1} className="w-50" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="w-50" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="w-50" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="visually-hidden">Previous</span>
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="visually-hidden">Next</span>
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    );
  }
}

export default CarouselComp;
