import React from "react";
import { Navbar } from "./Navbar";
import "../Styling/About.css";
import BannerBackground from "../Assets/about-background-image.png";
import BannerImage from "../Assets/about-background.png";
import { FiArrowRight } from "react-icons/fi";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner-container" id="about">
        <div className="about-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="about-text-section">
          <h1 className="primary-heading">Sallad med tomatkvistar</h1>
          <h3 className="secondary-heading">
            Mycket protein är det i denna salladen, testa!
          </h3>
          <div className="about-green-back">
            <img src={BannerImage} alt="" />
          </div>
          <div className="button-container">
            <button className="primary-button">
              Lär dig mer <FiArrowRight />{" "}
            </button>
            <button className="secondary-button">
              Titta på video <FiArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
