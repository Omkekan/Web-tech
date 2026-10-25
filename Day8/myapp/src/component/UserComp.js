import React from 'react'

const UserComp = (props) => {
    if(props.user==="Aman"){
        throw Error("Not A User");
    }
    return <h2>This is : {props.user}</h2>
}

export default UserComp
