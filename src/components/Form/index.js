import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import TagButtons from 'react-tag-buttons';

// // import './Register.css'

const tagsList = [
    {id:1, text:"Clothing"},
    {id:2, text:"ID"},
    {id:3, text:"Mental Health Care"},
    {id:4, text:"General Assistance"}
];

class Form extends Component {
  

  


  render() {
    const { message, location, date, peopleCount, peopleNames, physicalDescript, needsDescript, tags, name, org, selfDescript, email, phone, agreement, selectedDataSource } = this.state;
    return (
    <> 
        <h1>{message}</h1>
        <form onSubmit={this.props.onSubmit}>
            
            
            
            
            <input type="text" placeholder="name" name="name" onChange={this.props.changeHandler} value={name}/>
            <input type="text" placeholder="org" name="org" onChange={this.props.changeHandler} value={org}/>
            <textarea type="text" placeholder="selfDescript" name="selfDescript" onChange={this.props.changeHandler} value={selfDescript}/>
            <input type="text" placeholder="email" name="email" onChange={this.props.changeHandler} value={email}/>
            <input type="text" placeholder="phone" name="phone" onChange={this.props.changeHandler} value={phone}/>
            <input type="checkbox" name="agreement" />
            <TagButtons
                    dataSource={tagsList}
                    selectedDataSource={tags}
                    onTagClick={this.props.onTagClick}
            />
            <button type="submit" onClick={this.props.onSubmit}>Submit</button>
        </form>
  
    </>
    );
  }
}

export default Form;
