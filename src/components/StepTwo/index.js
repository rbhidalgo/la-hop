import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import TagButtons from 'react-tag-buttons';
import Button from '../Styles/Button'
import DatePicker   from '../DatePicker'

// StepTwo CSS
import './StepTwo.css'

const tagsList = [
    {id:1, text:"Clothing"},
    {id:2, text:"General Assistance"},
    {id:3, text:"Mental Health Care"},
    {id:4, text:"ID"},
    {id:5, text:"Physical Healthcare"},
    {id:6, text:"Phone"},
    {id:7, text:"Food"}
];

class StepTwo extends Component {
    render() {
        return (
            <div>
                {/* <h1>This is the StepTwo Component</h1> */}
                <form className="stepTwoForm">
                    <div>
                        <h4>Date last seen *</h4>
                        <DatePicker />
                    </div>
                    <br/>
                    <div>
                        <h4>Number of people *</h4>
                        <input type="number" placeholder="peopleCount" name="peopleCount" onChange={this.props.changeHandler} value={this.props.peopleCount}/>
                    </div>
                    <br/>
                    <div>
                        <input type="text" placeholder="peopleNames" name="peopleNames" onChange={this.props.changeHandler} value={this.props.peopleNames}/>
                    </div>
                    <br/>
                    <div>
                        <textarea type="text" placeholder="physicalDescript" name="physicalDescript" onChange={this.props.changeHandler} value={this.props.physicalDescript}/>
                    </div>
                    <br/>
                    <div>
                        <TagButtons
                        dataSource={tagsList}
                        selectedDataSource={this.props.tags}
                        onTagClick={this.props.onTagClick}
                        />
                    </div>
                    <div>
                        <Button onClick={this.props.changeProgress}>Next Step</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default StepTwo