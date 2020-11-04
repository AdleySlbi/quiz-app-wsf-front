import React from "react";
import Img from "../../assets/leaderboards-img.svg";
import "./Leaderboards.css";

function Leaderboards() {
  return (
    <div className="leaderboards col">
      
      <div className="col-12 col-sm-6">
        <h1>Leaderboards</h1>
        
        <img
        className="leaderboard-background"
        src={Img}
        alt="home background"
        />
      </div>
      <div className="col-12 col-sm-6">
        Réponses
      </div>
      
      
    </div>
  )
}

export default Leaderboards;
