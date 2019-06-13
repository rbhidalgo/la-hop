import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class StepTwo extends Component {
    render() {
        return (
            <div>
                <h1>This is the StepTwo Component</h1>
                <form>
                    <input type="text" placeholder="peopleCount" name="peopleCount" onChange={this.props.changeHandler} value={peopleCount}/>
                </form>
            </div>
        )
    }
}

export default StepTwo