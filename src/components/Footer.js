import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/markuskunej">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/markuskunej/">
          <LinkedInIcon />
        </a>
        <a href="mailto:kunejmarkus@gmail.com">
          <EmailIcon />
        </a>
      </div>
      <p> &copy; 2023 - {new Date().getFullYear()} Markus Kunej</p>
    </div>
  );
}

export default Footer;
