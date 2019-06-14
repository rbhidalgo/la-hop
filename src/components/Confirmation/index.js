import React, { Component } from 'react';

// CSS
import './Confirmation.css'
class Confirmation extends Component {
    render() {
        return (
            <div className="confirmationContainer">
                <h1>Thank you!</h1>
                <p className="confirmationParagraph">Your request has been received. We appreciate your support in assisting our homeless neighbors.</p>
                <br />
                <p className="confirmationParagraph">Please visit Learn More to find out what our outreach teams do to support those experiencing homelessness.</p>
                <br />
                <button className="continueButton">Go Home</button>
                <br />
                <p>Want to get more involved?</p>
                <br />
                <button className="volunteerButton" onClick={(e) => this.props.goHome(e)}>Volunteer</button>
            </div>
        )
    }
}

export default Confirmation