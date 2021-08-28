import React from "react";
import "./hero.css";
// import "../../assets/css/grid.css";

function Hero() {
  return (
    <div className="home-page-banner">
      <div className="row">
        <div className="hero-container">
          <div className="col-4 container-info">
            <h1>Find a trusted professional for your home needs</h1>
            <div className="info__small">
              Reliable service with over 15,000 experienced professionals from
              house cleaning to shipping
            </div>
          </div>
          <div className="col-8 container-img"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
