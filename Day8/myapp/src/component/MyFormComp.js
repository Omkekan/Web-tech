import React, { useState } from 'react'

const MyFormComp = () => {
    const [user,setUser]=useState({
        uname:"",
        upass:"",
        term:false
    })
    const inputchangehandler=(event)=>{
        // console.log(event.target.type);
        // console.log(event.target.name);
        // console.log(event.target.value);
        const{type,name,value,checked}=event.target;
        setUser({...user,[name]:type=="checkbox"?checked:value})
    }
    const checkData=(event)=>{
        event.preventDefault();
        if(user.uname===""){
            window.alert("User name is required");
            return false;
        }
        if(!user.uname.match("^[a-zA-Z ]{3,20}$")){
            window.alert("User name must contain char min-3 and max-20");
            return false;
        }
        if(user.upass===""){
            window.alert("Password is required");
            return false;
        }
        if(!user.term){
            window.alert("Please accept the terms and conditions");
            return false;
        }
        window.alert(JSON.stringify(user));
    }
    return (
        <div>
            <h2>This is MyFormComp</h2>
            <form onSubmit={checkData}>
                <label className='form-label'>Enter User Name:</label>
                <input type='text' name='uname' onChange={inputchangehandler} value={user.uname}/> <br/>
                <label className='form-label'>Enter User Passwor:</label>
                <input type='password' name='upass' onChange={inputchangehandler} value={user.upass}/> <br/>
                <label className='form-label'>
                <input type='checkbox' name='term' onChange={inputchangehandler}/> I Agree Term and Condition
                </label> <br/><br/>
                <button type='submit' className='btn btn-success btn-sm mt-2'>Submit</button>
            </form>
        </div>
    )
}

export default MyFormComp
