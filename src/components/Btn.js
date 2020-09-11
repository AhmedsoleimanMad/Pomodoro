import React from "react";
const btn = (props) => {
  return (
    <>
      <button disabled = {(props.type ==="add" || props.type ==="minus") && props.status}
       onClick={props.click}>
        {props.children}
        <i className={props.icon}></i>
      </button>
    </>
  );
};

export default btn;
