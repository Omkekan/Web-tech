import React, { Component } from "react";

class ConditionalRenComp extends Component{
    constructor(){
        super()
        this.state={
            isCond:true
        }
    }
    render(){
        //1.Use of if-else

        // if(this.state.isCond){
        //     return <h2>Admin login</h2>
        // }
        // else{
        //     return <h2>User login</h2>
        // }


        //2.Element as variable
        // let msg="";
        // if(this.state.isCond){
        //     // return <h2>Admin login</h2>
        //     msg="Admin Login";
        // }
        // else{
        //     // return <h2>User login</h2>
        //     msg="User Login";
        // }

        // return <h2>{msg}</h2>

        // 3.Use of ternary operator
        
        // return (this.state.isCond)?<h2>Admin login</h2>:<h2>User login</h2>

        //4.Short-circuit
        return this.state.isCond&&<h2>Admin login</h2>
    
    }
}

export default ConditionalRenComp;