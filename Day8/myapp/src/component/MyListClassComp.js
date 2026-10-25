import React, { Component } from 'react'

class MyListClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         courses:[
            {id:1,name:"HTML",price:2500},
            {id:2,name:"Css",price:2000},
            {id:3,name:"JS",price:3500},
            {id:4,name:"Java",price:4500},
            {id:5,name:"Bootstrap",price:500},
         ],
        
      }
    }
    
  render() {
    const {courses}=this.state
    
    return (
      <div>
        <h2 className='text-primary bg-info'>This is my List Component</h2>
        <ul>
            {
                courses.map((val,index)=>{
                    return <li key={index}>{val.name}-{val.price}</li>
                })
            }
        </ul>
       
      </div>
    )
  }
}

export default MyListClassComp
