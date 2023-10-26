import React from "react";
import { BiReset } from "react-icons/bi";

const Controls = ({ Setword }) => {

  
  return (
    <div className="word-controls">
      <BiReset
        style={{ fontSize: "25px" }}
        onClick={() => Setword(10)}
      ></BiReset>
      <div className="reset">
        <button onClick={()=>{Setword(10)}} >esc</button>
        <p>-</p>
        <p onClick={() => Setword(10)}>Reset</p>
      </div>
      <div className="btn-count">
        <div className="buttons">
          <button onClick={() => Setword(10)}>10</button>
          <button onClick={() => Setword(50)}>50</button>
          <button onClick={() => Setword(80)}>80</button>
          <button onClick={() => Setword(100)}>100</button>
        </div>
        <p>-</p>
        <p>No.Of.Words</p>
      </div>
    </div>
  );
};

export default Controls;
