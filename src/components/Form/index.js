import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// // import './Register.css'


class Form extends Component {
  state = {
    message: ""
  };

  onSubmit = async e => {
    e.preventDefault();
    const createTicket = await fetch("http://localhost:3001/ticket/create", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json"
      }
    });
    const parsedResponse = await createTicket.json();
    if (parsedResponse.success) {
      // setting localStorage on front end so user remains logged in
      // logout = localStorage.clear()
      // and clear sessions in back
      this.setState({
        message: parsedResponse.message
      });
    } 
  };

  render() {
    const { message } = this.state;
    return (
    <> 
        <form onSubmit={this.onSubmit}>
            <textarea type="text" placeholder="location" name="location" />
            <input type="date" placeholder="date" name="date" />
            <input type="text" placeholder="peopleCount" name="peopleCount" />
            <input type="text" placeholder="peopleNames" name="peopleNames" />
            <textarea
                type="text"
                placeholder="pyshicalDescript"
                name="pyshicalDescript"
            />
            <textarea type="text" placeholder="needsDescript" name="needsDescript" />
            <input type="text" placeholder="tags" name="tags" />
            <input type="text" placeholder="name" name="name" />
            <input type="text" placeholder="org" name="org" />
            <textarea type="text" placeholder="selfDescript" name="selfDescript" />
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="phone" name="phone" />
            <input type="checkbox" name="agreement" />
            <button type="submit">Submit</button>
        </form>
  
    </>
    );
  }
}

export default Form;
