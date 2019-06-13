import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class StepThree extends Component {
    render() {
        return (
            <div>
                <h1>This is the StepThree Component</h1>
                <form>
                    <input type="text" placeholder="org" name="org" onChange={this.props.changeHandler} value={this.props.org}/>
                </form>
            </div>
        )
    }
}

export default StepThree