import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class StepThree extends Component {
    render() {
        return (
            <div>
                <h1>This is the StepThree Component</h1>
                <form>
                    <select onChange={this.props.changeHandler} value={this.props.selfDescript} name="selfDescript">
                        <option>Please select one</option>
                        <option value="Business Owner">Business Owner</option>
                        <option value="Government Employee (City/County/State/Federal)">Government Employee (City/County/State/Federal)</option>
                        <option value="Concerned Resident">Concerned Resident</option>
                        <option value="First Responder (e.g., Fire Department Law Enforcement)">First Responder (e.g., Fire Department Law Enforcement)</option>
                        <option value="Homeless/Social Service Provider">Homeless/Social Service Provider</option>
                        <option value="Self-Referral">Self-Referral</option>
                        <option value="Elected Official">Elected Official</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text" placeholder="org" name="org" onChange={this.props.changeHandler} value={this.props.org}/>
                    <input type="text" placeholder="name" name="name" onChange={this.props.changeHandler} value={this.props.name}/>
                    <input type="text" placeholder="email" name="email" onChange={this.props.changeHandler} value={this.props.email}/>
                    <input type="text" placeholder="phone" name="phone" onChange={this.props.changeHandler} value={this.props.phone}/>
                    <input type="checkbox" name="agreement" />
                    <button type="submit" onClick={this.props.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default StepThree