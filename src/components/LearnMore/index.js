import React, { Component } from 'react';

// CSS
import './LearnMore.css'
class LearnMore extends Component {

    render() {

        return(

            <div className="learnMoreContainer">
                <div className="learnChild">
                    <img src="hearticon.png"></img>
                    <p className="learnParagraph">We’ll use the information from the requests made to dispatch a homeless services outreach team to the area.</p>
                </div>
                <br />
                <div className="learnChild">
                    <img src="ambulanceicon.png"></img>
                    <p className="learnParagraph">For medical or mental health emergencies, please call 911.</p>
                </div>
                <br />
                <div className="learnChild">
                    <img src="policeicon.png"></img>
                    <p className="learnParagraph">For crime or illegal activity, please contact your local law enforcement agency.</p>
                </div>
                <br />
                <div className="learnChild">
                    <img src="governmenticon.png"></img>
                    <p className="learnParagraph">For services like bulky item pickup, illegal dumping or graffiti removal, please contact your municipality.</p>
                </div>
                <br />
                <div className="learnChild">
                    <img src="callicon.png"></img>
                    <p className="learnParagraph">LA-HOP does not replace homeless encampment reporting protocols. Please contact your municipality.</p>
                </div>
                <br />
                <div className="btnContainer">
                <button className="continueButton">Request</button>
                </div>
            </div>
        )
    }

}

export default LearnMore;