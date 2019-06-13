import React, { Component } from 'react';

// CSS
import './Confirmation.css'
class Confirmation extends Component {
    render() {
        return (
            <div className="confirmationContainer">
                <h1>Thank you!</h1>
                <p>Your request has been received. We appreciate your support in assisting our homeless neighbors.</p>
                <br />
                <p>Please visit Learn More to find out what our outreach teams do to support those experiencing homelessness.</p>
                <br />
                <button className="continueButton">Back to LAHSA</button>
                <br />
                <p>Want to get more involved?</p>
                <br />
                <button>Volunteer</button>
            </div>
        )
    }
}

export default Confirmation