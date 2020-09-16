import React from "react";
const btn = (props) => {
  console.log(props);

  return (
    <>
      <button
        disabled={
          (props.type === "add" || props.type === "minus") && props.status
        }
        style={{
          color:
            (props.type === "add" || props.type === "minus") && props.status
              ? "#dc3545"
              : "#CCC",
        }}
        onClick={props.click}
      >
        {props.children}
        <i className={props.icon}></i>
      </button>
    </>
  );
};

export default btn;
