import React, { Component } from "react";
import ChildComp from "./ChildComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentClassComp extends Component{
    constructor(){
        super();
        this.state={
            item:"Samosa",
            price:25
        }
    }
    changeData(){
        this.setState((prevstate)=>({item:"PavBhaji", price:prevstate.price+20}))
    }
    render(){
       console.log("Parent component render")
        return(
            <div>
                <h1>This is Parent class</h1>
                <div>Samosa:<strong>{this.state.item}</strong></div>
                <div>Price:<strong>{this.state.price}</strong></div>
                <button type="button" onClick={()=>this.changeData()}>Change data</button>
                <hr/>
                <ChildComp newItem={this.state.item} newPrice={this.state.price} parentmethod={()=>this.changeData()}/>
                <hr/>
                <PureComp newItem={this.state.item}/>
                <hr/>
                <MemoComp newItem={this.state.item}/>
            </div>
        )
    }
}

export default ParentClassComp;