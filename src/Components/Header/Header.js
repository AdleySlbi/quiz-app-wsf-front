import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <React.Fragment>
      <div className="header container">
        <span className="logo">
          Notre <b>EGO-QUIZ</b>
        </span>
        <span className="menu-nav">
          <div className="nav-link">
            <Link to="/">Accueil</Link>
          </div>
          <div className="nav-link">
            <Link to="/score">Leaderboards</Link>
          </div>
          <div className="nav-link">
            <Link to="/teams">Notre équipe</Link>
          </div>
        </span>
      </div>
    </React.Fragment>
  );
}

export default Header;
