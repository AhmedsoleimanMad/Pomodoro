import React from "react";

const timer = (props)=>{
    return(
      <ul>

            <li>{props.min}</li>
            <li>:</li>
            <li>
            {props.sec < 10 ? `0${props.sec}` : props.sec}
            </li>
      </ul>



    )
}


export default timer;