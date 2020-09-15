import React from "react";
import "../main.css"

const timer = (props)=>{
    return(
      <ul className="timer">
            <li>{props.min}</li>
            <li>:</li>
            <li>
            {props.sec < 10 ? `0${props.sec}` : props.sec}
            </li>
      </ul>



    )
}


export default timer;