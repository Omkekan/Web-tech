import React, { Component } from "react";

class StateComp extends Component{
    constructor(props){
        super(props);
        this.state={
            fname:"Ajinkya Raut",
            sal:36548,
        };
    }
    changestate = () =>{
        this.setState((prevstate)=>({fname:"Ajinkya", sal:prevstate.sal+1200}))
    }

    render(){
        const {fname,sal} = this.state;
        return(
            <div>
                <h2>Welcome to State Component</h2>
                <p>Name:<strong>{fname}</strong>, Salary:<strong>{sal}</strong></p>

                <button type="button" onClick={()=>this.changestate()}>change state data</button>{" "}
                <button type="button" onClick={()=>this.setState((prevstate)=>({fname:"Ajinkya Raut", sal:prevstate.sal+1200}))}>change state data</button>
            </div>
        )
    }
}

export default StateComp;