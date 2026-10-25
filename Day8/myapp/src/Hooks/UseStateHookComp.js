import React, { useState } from 'react'
import imgpath from '../shared/constsnt/constantData';

const UseStateHookComp = () => {
    const [myName, setMyName] = useState("Ajinkya");
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(["samosa", "idli", "sambhar", "chatani-chatani"])
    const [menu, setMenu] = useState([
        { id: 1, name: "HTML", price: 2500 },
        { id: 2, name: "Css", price: 2000 },
        { id: 3, name: "JS", price: 3500 },
        { id: 4, name: "Java", price: 4500 },
        { id: 5, name: "Bootstrap", price: 500 },
    ])
    const [menu1, setMenu1] = useState ([
        { id: 1, title: "Iphone18", path:imgpath.iphone, price: 164000 },
        { id: 2, title: "S26ultra", path:imgpath.s26ultra, price: 150000 },
        { id: 3, title: "Nothing", path:imgpath.nothing, price: 64000 },
        { id: 4, title: "Reno15", path:imgpath.reno, price: 54000 },
        { id: 5, title: "Pixel 10pro", path:imgpath.pixel, price: 174000 }
    ])
    return (
        <div>
            <h2>This is UseStateHookComp</h2>
            <strong>Name:{myName}</strong> {" "} <br />
            <button type='button' className='btn btn-outline-primary' onClick={() => setMyName("Ajinkya Raut")}>change name</button>
            <hr />
            <strong>Counter:{count}</strong> {" "}<br />
            <button type='button' className='btn btn-outline-primary' onClick={() => setCount(count + 1)}>change count</button>
            <hr />
            <ul>
                {
                    item.length > 0 && item.map((Val, index) => {
                        return <li key={index}>{Val}</li>
                    })
                }
            </ul>
            <ul>
                {
                    menu.length > 0 && menu.map((val, index) => {
                        return <li key={index}>{val.id}-{val.name}-{val.price}</li>
                    })
                }
            </ul>
            <ul>
                {
                    menu1.length > 0 && menu1.map((val, index) => {
                        return <div  className='parent' style={{display:"flex"}}>
                            <div className='card border-primary' key={index} style={{width:"230px"}}>
                            <img src={val.path} alt={val.title} style={{width:"199px"}}></img>
                            <div className='card-body border-primary'>
                                <h3>Title:{val.title},Price:{val.price}&#8377;</h3>
                            </div>
                        </div>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default UseStateHookComp
