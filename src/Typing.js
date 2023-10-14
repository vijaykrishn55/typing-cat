import React, { useState } from "react";
import { BiSolidKeyboard } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";
import { BiReset } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
let textarea = document.getElementById("input-text");

const Typing = () => {
  const [words, Setwords] = useState([
    "Tomato",
    "OpenAI",
    "Banana",
    "Programming",
    "October",
    "Purple",
    "Pizza",
    "Library",
    "Elephant",
    "Sunflower",
  ]);
  console.log(words);

  function loadWords(element) {
    let direct = document.getElementById(`${element}`);
    console.log(direct);
  }

  return (
    <div className="main-container">
      <div className="top">
        <div className="type">
          <h1>TypeCat</h1>
          <BiSolidKeyboard className="keyboard"></BiSolidKeyboard>
        </div>
        <BiSolidUserCircle className="circle"></BiSolidUserCircle>
      </div>
      <div className="Timer">
        <p>15</p>
        <div className="right-timer">
          <p>15s 30s 60s</p>
        </div>
      </div>
      <div className="words">
        <textarea id="input-text" placeholder={words.join(" ")}></textarea>
      </div>
      <div className="word-controls">
        <BiReset style={{ fontSize: "25px" }}></BiReset>
        <div className="reset">
          <button>esc</button>
          <p>-</p>
          <p>reset</p>
        </div>
        <div className="btn-count">
          <div className="buttons">
            <button>10</button>
            <button>50</button>
            <button>80</button>
            <button>100</button>
          </div>
          <p>-</p>
          <p>No.Of.Words</p>
        </div>
      </div>
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
    </div>
  );
};
export default Typing;
