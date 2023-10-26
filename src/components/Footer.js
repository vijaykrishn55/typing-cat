import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <BsInstagram
          style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
        />
        <BsLinkedin
          style={{ color: "blue", fontSize: "20px", cursor: "pointer" }}
        ></BsLinkedin>
        <AiOutlineMail
          style={{ color: "blue", fontSize: "20px", cursor: "pointer" }}
        ></AiOutlineMail>
        <BsGithub
          style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
        ></BsGithub>
      </div>
      <div className="theme">
        <select className="select">
          <option>Darken-black</option>
          <option>Colored-Grey</option>
          <option>Colored-Pink</option>
          <option>Colored-Green</option>
          <option>Colored-Blue</option>
          <option>Lighten-White</option>
          <option>Colored-lightPurple</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
