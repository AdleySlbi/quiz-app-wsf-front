import React from "react";
import homeImg from "../../assets/home-background.svg";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage row ml-0 mr-0 flex-column">
      <img
        className="homepage-background"
        src={homeImg}
        alt="home background"
      />
      <div className="home-text">
        <h1 className="col home-title">Question et Réponse Quiz</h1>
        <p className=" col m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          libero feugiat, faucibus libero id, scelerisque quam
        </p>
        <div className="button col mt-3">
          <Link to="/quiz">Commençons</Link>
        </div>
      </div>
      

    </div>
  );
}

export default Homepage;
