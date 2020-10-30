import React from "react";
import homeImg from "../../assets/home-background.svg";
import "./Questions.css";

function Questions() {
  return (
    <div className="homepage pt-5">
      <img
        className="homepage-background"
        src={homeImg}
        alt="home background"
      />
      <div className="mt-3">
        <h1 className="home-title">Question et Réponse Quiz</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          libero feugiat, faucibus libero id, scelerisque quam
        </p>
      </div>
    </div>
  );
}

export default Questions;
