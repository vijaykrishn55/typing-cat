import React, { useEffect, useState } from "react";
import { BiSolidKeyboard } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";

const Header = (props) => {
 
  return (
    <div>
      <div className="top">
        <div className="type">
          <h1>TypeCat</h1>
          <BiSolidKeyboard className="keyboard"></BiSolidKeyboard>
        </div>
        <BiSolidUserCircle className="circle"></BiSolidUserCircle>
      </div>
      <div className="Timer">
        <p className="time">{props.time}s</p>
        <div className="right-timer">
          <button onClick={()=>props.setTime(15)}>15s</button>
          <button onClick={()=>props.setTime(30)}>30s</button>
          <button onClick={()=>props.setTime(60)}>60s</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
