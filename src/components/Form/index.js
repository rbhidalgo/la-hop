import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Tags from '../Tags'

// // import './Register.css'

class Form extends Component {
  state = {
    message: "",
    location: '',
    date: '',
    peopleCount: 0,
    peopleNames: '',
    physicalDescript: '',
    needsDescript: '',
    tags: [],
    name: '',
    org: '',
    selfDescript: '',
    email: '',
    phone: '',
    agreement: false
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    try{
        const createTicket = await fetch("http://localhost:3001/ticket/create", {
            method: "POST",
            // credentials: "include",
            body: JSON.stringify(this.state),
            headers: {
              "Content-Type": "application/json"
            }
          });
          const parsedResponse = await createTicket.json();
          if (parsedResponse.success) {
            // setting localStorage on front end so user remains logged in
            // logout = localStorage.clear()
            // and clear sessions in back
            this.setState({
              message: parsedResponse.message,
              location: '',
              date: '',
              peopleCount: 0,
              peopleNames: '',
              physicalDescript: '',
              needsDescript: '',
              tags: [],
              name: '',
              org: '',
              selfDescript: '',
              email: '',
              phone: '',
              agreement: false
            });
          } 
    } catch(err) {
        console.log(err)
    }
 
  };

  render() {
    const { message, location, date, peopleCount, peopleNames, physicalDescript, needsDescript, tags, name, org, selfDescript, email, phone, agreement } = this.state;
    return (
    <> 
        <h1>{message}</h1>
        <form onSubmit={this.onSubmit}>
            <textarea type="text" placeholder="location" name="location" onChange={this.changeHandler} value={location}/>
            <input type="date" placeholder="date" name="date" onChange={this.changeHandler} value={date}/>
            <input type="text" placeholder="peopleCount" name="peopleCount" onChange={this.changeHandler} value={peopleCount}/>
            <input type="text" placeholder="peopleNames" name="peopleNames" onChange={this.changeHandler} value={peopleNames}/>
            <textarea
                type="text"
                placeholder="physicalDescript"
                name="physicalDescript"
                onChange={this.changeHandler}
                value={physicalDescript}
            />
            <textarea type="text" placeholder="needsDescript" name="needsDescript" onChange={this.changeHandler} value={needsDescript}/>
            <input type="text" placeholder="tags" name="tags"/>
            <input type="text" placeholder="name" name="name" onChange={this.changeHandler} value={name}/>
            <input type="text" placeholder="org" name="org" onChange={this.changeHandler} value={org}/>
            <textarea type="text" placeholder="selfDescript" name="selfDescript" onChange={this.changeHandler} value={selfDescript}/>
            <input type="text" placeholder="email" name="email" onChange={this.changeHandler} value={email}/>
            <input type="text" placeholder="phone" name="phone" onChange={this.changeHandler} value={phone}/>
            <input type="checkbox" name="agreement" />
            {/* <Tags tagsList={this.tagsList}/> */}
            <button type="submit">Submit</button>
        </form>
  
    </>
    );
  }
}

export default Form;
