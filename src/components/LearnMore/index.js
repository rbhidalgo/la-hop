import React, { Component } from 'react';

class LearnMore extends Component {

    render() {

        return(

            <div>
                <div>
                    <img src="hearticon.png"></img>
                    <p>We’ll use the information from the requests made to dispatch a homeless services outreach team to the area.</p>
                </div>
                <div>
                    <img src="ambulanceicon.png"></img>
                    <p>For medical or mental health emergencies, please call 911.</p>
                </div>
                <div>
                    <img src="policeicon.png"></img>
                    <p>For crime or illegal activity, please contact your local law enforcement agency.</p>
                </div>
                <div>
                    <img src="governmenticon.png"></img>
                    <p>For services like bulky item pickup, illegal dumping or graffiti removal, please contact your municipality.</p>
                </div>
                <div>
                    <img src="callicon.png"></img>
                    <p>LA-HOP does not replace homeless encampment reporting protocols. Please contact your municipality.</p>
                </div>
            </div>
        )
    }

}

export default LearnMore;