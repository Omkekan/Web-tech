import React, { Component } from "react";
class MyCountComp extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    countIncr(){
        this.setState((prevstate)=>({count:prevstate.count+1}))
    }
    countDecr(){
        this.setState((prevstate)=>({count:prevstate.count-1}))
    }
    countrest(){
        this.setState({count:0})
    }
    render(){
        return(
            <div>
                <h2>Welcome to the counter !</h2>
                <p>Count:<strong>{this.state.count}</strong></p>
                <button type="button" onClick={()=>this.countIncr()}>Incr</button>{" "}
                <button type="button" onClick={()=>this.countDecr()}>Decr</button>{" "}
                <button type="reset" onClick={()=>this.countrest()}>Reset</button>
            </div>
        )
    }
}

export default MyCountComp;