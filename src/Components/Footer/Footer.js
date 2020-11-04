import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="icon">
          <a
            target="_BLANK"
            rel="noopener noreferrer"
            title="Twitter"
            href="https://twitter.com/"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className="icon">
          <a
            target="_BLANK"
            rel="noopener noreferrer"
            title="Twitter"
            href="https://www.facebook.com/"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
