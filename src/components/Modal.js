import React from "react";
import Btn from "./Btn";

const modal = (props) => {
  const styleModal = {
    color: "#444",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: props.modalState ? "flex" : "none",
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#F4F4F4",
    fontSize: "35px",
  };

  return (
    <section style={styleModal}>
      <span className="btnColse" onClick={props.btnClose}>
        <i className="fas fa-times-circle"></i>
      </span>
      <p>
        Le Lorem Ipsum est simplement du faux texte employé dans la composition
        et la mise en page avant impression. Le Lorem Ipsum est le faux texte
        standard de l'imprimerie depuis les années 1500, quand un imprimeur
        anonyme assembla ensemble des morceaux de texte pour réaliser un livre
        spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,
        mais s'est aussi adapté à la bureautique informatique, sans que son
      </p>
      <Btn click={props.closeModalAndRestarHandeler}>
        Close Modal and restart
      </Btn>
    </section>
  );
};

export default modal;
