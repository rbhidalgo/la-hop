import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import './ProgressBar.css'

class StepProgressBar extends Component {
    state = {
        percent: 0
    }

    changeProgress = () => {
        console.log("changeProgress function hit")
        let currentNum = this.state.percent
        this.setState({
            percent: currentNum + 50
        });
    }

  render() {
     const { percent } = this.state
    return (
        <div>
        <ProgressBar percent={percent}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
      <button onClick={this.changeProgress}>Next Step</button>
      </div>
    );
  }
}

export default StepProgressBar