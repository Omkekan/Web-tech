import React, { Component } from "react";
class ClassComp extends Component{
    render(){
        const {pname,pcom,pprice}=this.props
        return(
            <div>
                 <h2>This is a class component</h2>
                 {/* <h1>Pname:{this.props.pname} , Pcom:{this.props.pcom} , pprice={this.props.pprice}</h1> */}
                 <h1>Pname:{pname} , Pcom:{pcom} , pprice={pprice}</h1>
            </div>
        )
    }
}

export default ClassComp;