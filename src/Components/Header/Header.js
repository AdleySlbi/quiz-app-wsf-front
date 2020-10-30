import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <React.Fragment>
      <div className="container header">
        <h1>Ego Quizz</h1>
        <span>
          <Link to="/">Accueil</Link>
          <Link to="/score">Leaderboards</Link>
          <Link to="/teams">Notre équipe</Link>
        </span>
      </div>
    </React.Fragment>
  );
}

export default Header;
