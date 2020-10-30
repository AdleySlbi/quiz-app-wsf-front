import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <React.Fragment>
      <div className="container header">
        <span className="logo">
          Notre <b>EGO-QUIZ</b>
        </span>
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
