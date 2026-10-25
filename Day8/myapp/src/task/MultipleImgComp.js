import React, { Component } from 'react'
import imgpath from '../shared/constsnt/constantData'

class MultipleImgComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         img:imgpath.doll
      }
    }

    changeImg1(img){
        this.setState(()=>{
            return {img:img}
        })
    }
    // changeImg2(){
    //     this.setState(()=>{
    //         return {img:imgpath.reno}
    //     })
    // }
    // changeImg3(){
    //     this.setState(()=>{
    //         return {img:imgpath.edge70pro}
    //     })
    // }
    // changeImg4(){
    //     this.setState(()=>{
    //         return {img:imgpath.nothing}
    //     })
    // }
    // changeImg5(){
    //     this.setState(()=>{
    //         return {img:imgpath.s26ultra}
    //     })
    // }
    // changeImg6(){
    //     this.setState(()=>{
    //         return {img:imgpath.key}
    //     })
    // }
    
  render() {
    return (
      <div>
      <img src={this.state.img} alt="doll" style={{height:"300px", width:"400px"}}/>
      <button type='button' onClick={()=>this.changeImg1(imgpath.reno)} className='btn btn-primary'>Img1</button>{" "}
      <button type='button' onClick={()=>this.changeImg1(imgpath.edge70pro)} className='btn btn-primary'>Img2</button>{" "}
      <button type='button' onClick={()=>this.changeImg1(imgpath.iphone)} className='btn btn-primary'>Img3</button>{" "}
      <button type='button' onClick={()=>this.changeImg1(imgpath.s26ultra)} className='btn btn-primary'>Img4</button>{" "}
      <button type='button' onClick={()=>this.changeImg1(imgpath.nothing)} className='btn btn-primary'>Img5</button>{" "}
      <button type='button' onClick={()=>this.changeImg1(imgpath.nothing)} className='btn btn-primary'>Img6</button>
        
      </div>
    )
  }
}

export default MultipleImgComp
