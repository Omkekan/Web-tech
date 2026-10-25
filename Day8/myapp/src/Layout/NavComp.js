import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <div>
            <Link to="mycarousel" className='btn btn-primary btn-sm'>Carousel</Link>{" "}
            <Link to="list" className='btn btn-primary btn-sm'>List</Link>{" "}
            <Link to="hooks" className='btn btn-primary btn-sm'>Hooks</Link>{" "}
            <Link to="myimages" className='btn btn-primary btn-sm'>Imgaes</Link>{" "}
            <Link to='productDashboard'className='btn btn-primary btn-sm'>Product Dash</Link>
        </div>
    )
}

export default NavComp
