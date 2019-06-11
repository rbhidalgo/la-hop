import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'


const NavBar = ({loading}) => 

    <div className="navBar">
        <NavLink activeClassName="active" className="navBtn" to={routes.REQUEST}>Make Request</NavLink>
        <NavLink activeClassName="active" className="navBtn" to={routes.INFO}>Learn More</NavLink> 
        <NavLink activeClassName="active" className="navBtn" to={routes.CONTACT}>Contact</NavLink>  
    </div>

export default NavBar