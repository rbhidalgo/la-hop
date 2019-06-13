import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import * as routes from "../../constants/routes";
import "../Styles/animation.css";
// import '../index.css';

class NavBar extends Component {
	state = {
        showStep: true,
        underline: true,
        underline2: true
    };
    
    changeColor=()=>{
        this.setState({
            underline: !this.state.underline
        })
     }

     changeColor2=(e)=>{
         e.preventDefault()
        this.setState({
            underline2: !this.state.underline2
        })
     }

	render() {
        const { showStep } = this.state;
        let btn_class = this.state.underline ? "nav-link1" : "nav-link2px";
        let btn_class2 = this.state.underline2 ? "nav-link2" : "nav-link22px";

		return (
			<CSSTransition
				in={showStep}
				appear={true}
				timeout={300}
				classNames='fade'>
                    <nav className='navbar-navigation'>
    					<div className={btn_class} onClick={this.changeColor && !this.changeColor2}>
                        <NavLink
						to={routes.REQUEST}>
						Make Request
					</NavLink>
                    </div>
                    <div className={btn_class2} onClick={this.changeColor2 && !this.changeColor}>
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
