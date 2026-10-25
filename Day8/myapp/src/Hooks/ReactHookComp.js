import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ReactHookComp = () => {
    return (
        <div>
            {/* <h2>This is ReactHookComp</h2> */}
            <Link to="usestate" className='btn btn-success btn-sm'>useState</Link>{" "}
            <Link to="useeffect" className='btn btn-warning btn-sm'>useEffect</Link>{" "}
            <Outlet/>
            
        </div>
    )
}

export default ReactHookComp
