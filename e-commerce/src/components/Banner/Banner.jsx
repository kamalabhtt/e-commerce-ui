import React from "react";
import "./Banner.css";
import modelImage from "../../assets/model.png";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner">
        <div className="banner-content">
          <h1>Exclusive<br /><span>Offers For You</span></h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="check-btn">Check now</button>
        </div>
        <div className="banner-image">
          <img src={modelImage} alt="Model" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
