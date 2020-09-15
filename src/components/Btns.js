import React from "react";
import Btn from "./Btn";
import "../main.css"

const Btns = (props) => {
  console.log(props.btns);
  let btns = props.btns.map((element, index) => {
    return (
      <li key={index} className="btn">
        <Btn      
          icon={element.type == "play" && props.status == true ? element.iconPause: element.icon  
          }
         
          click={() => props.click(element)}
          type = {element.type}
          status = {props.status}
           
        
          
          />
        
      </li>
    );
  });
  return <ul>{btns}</ul>;
};
export default Btns;
