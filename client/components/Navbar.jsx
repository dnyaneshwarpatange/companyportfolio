import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="navright">

            </div>
            <div className="navleft">
               <ul>
                <li> <NavLink to ="/">Home</NavLink></li>
                <li> <NavLink to ="/about">About</NavLink></li>
                <li> <NavLink to ="/contact">Contact</NavLink></li>
                <li> <NavLink to ="/login">Login</NavLink></li>
                <li> <NavLink to ="/register">Register</NavLink></li>


               </ul> 
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
