import React, { Component } from "react";
import { Redirect } from "react-router-dom";


// // import './Register.css'



class Form extends Component {
  

  


  render() {
    const { message, location, date, peopleCount, peopleNames, physicalDescript, needsDescript, tags, name, org, selfDescript, email, phone, agreement, selectedDataSource } = this.state;
    return (
    <> 
        <h1>{message}</h1>
        <form onSubmit={this.props.onSubmit}>
            
            
            
            
            
            
            <textarea type="text" placeholder="selfDescript" name="selfDescript" onChange={this.props.changeHandler} value={selfDescript}/>
            
           
            <input type="checkbox" name="agreement" />
            
            <button type="submit" onClick={this.props.onSubmit}>Submit</button>
        </form>
  
    </>
    );
  }
}

export default Form;
