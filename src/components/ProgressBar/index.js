import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import './ProgressBar.css'

class StepProgressBar extends Component {

  render() {
    return (
        <div>
        <ProgressBar percent={this.props.percent}>
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
      
      </div>
    );
  }
}

export default StepProgressBar