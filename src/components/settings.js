import React from "react";

const style = {
  height: "50vh",
  position: "absolute",
  top: "3%",
  left: "0",
  bottom: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "rgba(109, 33, 79, 0.5)",
  width: "160px",
  transition: ".5s transform ease-in",
  borderBottomRightRadius: "490px",
  borderTopRightRadius: "490px",
  boxShadow: "-1px 2px 6px 1px #111",
};

const inputStyle = {
  padding: "10px 20px",
  border: "1px solid #130f40",
  marginBottom: "10px",
};

const formStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const iconStyle = {
  color: "#F4F4F4",
  position: "absolute",
  right: "-41px",
  fontSize: "40px",
};

const reglage = (props) => {
  return (
    <div
      style={{
        ...style,
        transform:
          props.settingState && props.play
            ? "translateX(0%)"
            : "translateX(-100%)",
      }}
    >
      <span style={iconStyle} onClick={props.clicked}>
        <i
          style={{ color: props.play ? "#6D214F" : "#dc3545" }}
          className="fas fa-cog"
        ></i>
      </span>
      <form style={formStyle}>
        <input
          value={props.currentMin}
          style={inputStyle}
          onChange={props.min}
          type="number"
          placeholder="Min"
          min="0"
          max="25"
        />

        <input
          value={props.currentSec}
          style={inputStyle}
          onChange={props.sec}
          type="number"
          placeholder="Sec"
          min="0"
          max="59"
        />
      </form>
    </div>
  );
};

export default reglage;
