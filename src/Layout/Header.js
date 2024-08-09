import React from 'react'
import './css/header.css'
import { Link } from 'react-router-dom'

const Header = ({options}) => {
  return (
    <div>
       <div id='Header'>
           <Link to={"/"}>Feature Garage</Link> 
           <div id='Header_nav'>
             {/* <Link to={"/"}>Avaliable Options: {options}</Link> */}
             <Link to={"/"}>“Be the change that you wish to see in the world.”</Link>
            </div> 
       </div>
    </div>
  )
}

export default Header
