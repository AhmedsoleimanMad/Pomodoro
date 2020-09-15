import React, { Component } from "react";
import Btns from "./components/Btns";
import Modal from "./components/Modal";
import Timer from "./components/Timer" 
import "/main.css"
class App extends Component {
  state = {
    min: 15,
    sec: 5,
    play: false,
    modal:false,

    allBtns: [
      {
        type: "play",
        icon: "fas fa-play",
        iconPause: "fas fa-pause",
      },
      {
        type: "stop",
        icon: "fas fa-stop",
      },
      {
        type: "minus",
        icon: "fas fa-minus",
      },
      {
        type: "add",
        icon: "fas fa-plus",
      },

   
    ],
  };

  btnHandeler = (btn) => {
    switch (btn.type) {
      case "play":
        this.setState({
          play: !this.state.play,
        });
        
         let t = setInterval(() => {

          console.log("Ahmed")
          this.state.play
          ? this.setState({
              sec: this.state.sec - 1,
            })
          : clearInterval(t);
         

          if (this.state.sec === 0 && this.state.min > 0) {
            this.setState({
              sec: 60,
              min: this.state.min - 1,
            });
          }
          if(this.state.min===0 && this.state.sec === 0){
            this.setState({
              play :false,
              modal:true,
              min: 15,
              sec: 59,

            }) 
          }
        }, 1000);

        break;

      case "stop":
        this.setState({
          play: false,
          min: 25,
          sec: 59,
        });
        break;

      case "minus":
          this.setState({
            min:this.state.min <=0 ? 0 : this.state.min - 1,
          });
       
        break;

      case "add":
          this.setState({
            min: this.state.min + 1,
          });
        break;
    }
  };


  closeModalAndRestarHandeler = ()=>{
    this.setState({
      modal:false,
      min:25,
      sec:10,
    })  

    this.btnHandeler(this.state.allBtns[0])
  }


  closeModalWithoutRestartHandeler = ()=>{

    this.setState({
      modal:false,
    }) 

  }

  render() {
    return (
      <div className="container">
        <Btns  status={this.state.play}  btns={this.state.allBtns}  click={this.btnHandeler} />
        <Timer sec = {this.state.sec} min = {this.state.min}/>
        <Modal closeModalAndRestarHandeler = {this.closeModalAndRestarHandeler}
               modalState ={this.state.modal}
               btnClose = {this.closeModalWithoutRestartHandeler}
               
               />
      </div>
    );
  }

}
export default App;
