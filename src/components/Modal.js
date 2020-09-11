import React from "react";
import Btn from "./Btn"




const modal = (props)=>{
    const styleModal = {
        color:"#444",
        backgroundColor:"rgba(0,0,0,0.4)",
        display : props.modalState ? 'block' : 'none', 
        position :"absolute",
        top:'0',
        left:'0',
        bottom:'0',
        right:'0' 
    }



    
    

    return (
    
        <section style={styleModal}>
            <span className="btnColse" onClick = {props.btnClose}><i className="fas fa-times-circle"></i></span>
            <p>It's the moment to take your break</p>
            <Btn click = {props.closeModalAndRestarHandeler}>Close Modal and restart</Btn>
        </section>
      

    );
}


export default modal;