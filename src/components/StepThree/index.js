import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class StepThree extends Component {
    render() {
        return (
            <div>
                <h1>This is the StepThree Component</h1>
                <form>
                    <input type="text" placeholder="org" name="org" onChange={this.props.changeHandler} value={this.props.org}/>
                    <input type="text" placeholder="name" name="name" onChange={this.props.changeHandler} value={this.props.name}/>
                    <input type="text" placeholder="email" name="email" onChange={this.props.changeHandler} value={this.props.email}/>
                    <input type="text" placeholder="phone" name="phone" onChange={this.props.changeHandler} value={this.props.phone}/>
                    <input type="checkbox" name="agreement" />
                </form>
            </div>
        )
    }
}

export default StepThree