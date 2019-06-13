import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class StepTwo extends Component {
    render() {
        return (
            <div>
                <h1>This is the StepTwo Component</h1>
                <form>
                    <input type="text" placeholder="peopleCount" name="peopleCount" onChange={this.props.changeHandler} value={peopleCount}/>
                    <input type="text" placeholder="peopleNames" name="peopleNames" onChange={this.props.changeHandler} value={peopleNames}/>
                    <textarea type="text" placeholder="physicalDescript" name="physicalDescript" onChange={this.props.changeHandler} value={physicalDescript}/>
                </form>
            </div>
        )
    }
}

export default StepTwo