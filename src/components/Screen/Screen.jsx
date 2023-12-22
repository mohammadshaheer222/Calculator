import React from "react";
import "./Screen.css";
const Screen = ({display , result, equals}) => {
  return (
    <>
      <input
        className="label"
        style={{fontSize: equals  ? "22px" : "32px"}}
        disabled
        placeholder="0"
        value={display }
      />
      <input className="label-2" style={{fontSize: equals ? "32px" : "22px"}} disabled value={(result === "" ? "" : " = ") + result}/>
    </>
  );
};

export default Screen;
