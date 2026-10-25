import React, { Component } from 'react'
import imgpath from '../shared/constsnt/constantData'

class ToggleComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         img:imgpath.doll,
         isToggle:true
        
      }
    }
    
     
    
    changeImg(){
      if(this.state.isToggle){
        this.setState({
        img:imgpath.goldchest
      });
      this.state.isToggle=false;
      }else{
        this.setState({
        img:imgpath.doll
      });
      this.state.isToggle=true;
      }
        
    }
  render() {
    return (
    
        <div>
      <img src={this.state.img} alt="doll" style={{height:"300px", width:"400px"}}/>
      <button type='button' onClick={()=>this.changeImg()}>Toggle Img</button>
    </div>
      
    )
  }
}

export default ToggleComp

