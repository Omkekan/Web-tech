import React, { useEffect, useState } from 'react'

const UseEffectHookComp = () => {
    const [age,setAge]=useState(18);
    const [sal,setSal]=useState(30000);

    //case 1-no dependency value
    // useEffect(()=>{
    //     setAge(age+1);
    // });

    //2-when dependecy value pass as blank array
    // useEffect(()=>{
    //     setAge(age+1);
    // },[]);

    //3-when dependency value pass as state or props
    useEffect(()=>{
        setAge(age+1)
    },[sal])

    return (
        <div>
            <h2>This is UseEffectHookComp</h2>
            <strong>Age:{age}</strong> <br/>
            <strong>Salary:{sal}</strong> <br/>
            <button type='button' onClick={()=>setSal(sal+1000)}>increment Salary</button>
        </div>
    )
}

export default UseEffectHookComp
