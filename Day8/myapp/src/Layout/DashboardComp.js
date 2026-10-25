import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from "../Layout/NavComp"
import FooterComp from './FooterComp'

const DashboardComp = () => {
    return (
        <div className='container'>
            {/* <h1>This is DashboardComp</h1> */}
            <div className='card border-primary mt-2'>
                <div className='card-header border-primary'>
                    <NavComp/>
                </div>
                <div className='card-body border-primary'><Outlet/></div>
                <div className='card-footer border-primary'>
                    <FooterComp/>
                </div>
            </div>
            
        </div>
    )
}

export default DashboardComp
