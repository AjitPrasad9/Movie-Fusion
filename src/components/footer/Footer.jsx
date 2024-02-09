import React from "react";
import { SiGmail } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>

        <h4>
          This App is Designed & Developed By&nbsp;
          <span className="nam">
            Ajit<span className="invi">.</span>Prasad&nbsp;
          </span>
          || &copy; 2024 All rights reserved
        </h4>
        <div className="infoText">
          I have developed a video streaming Application using React.js and
          Redux .
          {/*integrating the TMDb API to provide users with access to their
          favorite movies and TV shows.*/}
          This project serves as a valuable entertainment hub for society,
          offering a seamless and immersive viewing experience. With a
          user-friendly interface, the app enables easy navigation and discovery
          of diverse content. Its responsive design ensures accessibility across
          devices, enhancing the accessibility of entertainment. Leveraging the
          power of React.js and state management with Redux, the app delivers a
          dynamic and engaging platform for users to enjoy and explore a vast
          array of cinematic content.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <SiGmail />
          </span>
          <span className="icon">
            <RiInstagramFill />
          </span>
          <span className="icon">
            <FaYoutube />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
