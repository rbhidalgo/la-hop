import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import * as routes from "../../constants/routes";
import "../Styles/animation.css";

class NavBar extends Component {
	state = {
		showStep: true
	};
	render() {
		const { showStep } = this.state;
		return (
			<CSSTransition
				in={showStep}
				appear={true}
				timeout={300}
				classNames='fade'>
                    <nav className='navbar_navigation'>
    					<div className="nav-link">
                        <NavLink
						to={routes.REQUEST}>
						Make Request
					</NavLink>
                    </div>
                    <div className="nav-link">
					<NavLink
						to={routes.LEARN}>
						Learn More
					</NavLink>
                    </div>
				</nav>
			</CSSTransition>
		);
	}
}
export default NavBar;
