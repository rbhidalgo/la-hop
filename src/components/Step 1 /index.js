import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Step1 extends Component {
    render() {
        return (
            <div>
                <h1>This is the Step1 Component</h1>
                <form>
                    <textarea type="text" placeholder="location" name="location" onChange={this.props.changeHandler} value={location}/>
                </form>
            </div>
        )
    }
}

export default Step1