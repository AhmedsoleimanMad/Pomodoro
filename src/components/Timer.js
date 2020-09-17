import React from "react";
import "../main.css";

const timer = (props) => {
  return (
    <ul className={props.play ? "timer anim" : "timer"}>
      <li>{props.min < 10 ? `0${props.min}` : props.min}</li>
      <li>:</li>
      <li>{props.sec < 10 ? `0${props.sec}` : props.sec}</li>
    </ul>
  );
};

export default React.memo(timer);
