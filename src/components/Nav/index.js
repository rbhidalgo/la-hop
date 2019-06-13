import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'

import * as routes from "../../constants/routes";
import '../Styles/animation.css'

class NavBar extends Component {
    state = {
        showStep: true
    }
	render() {
        const {showStep} = this.state
		return (
			<div className='navBar'>
                <CSSTransition
                in={showStep}
                appear={true}
                timeout={300}
                classNames="fade">
				<NavLink
					activeClassName='active'
					className='navBtn'
					to={routes.REQUEST}>
					Make Request
				</NavLink>
                </CSSTransition>
				<NavLink activeClassName='active' className='navBtn' to={routes.LEARN}>
					Learn More
				</NavLink>
			</div>
		);
	}
}
export default NavBar;
