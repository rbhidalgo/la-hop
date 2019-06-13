import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'


const NavBar = () => 

    <div className="navBar">
        <NavLink activeClassName="active" className="navBtn" to={routes.REQUEST}>Make Request</NavLink>
        <NavLink activeClassName="active" className="navBtn" to={routes.LEARN}>Learn More</NavLink> 
    </div>

export default NavBar