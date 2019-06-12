import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// // import './Register.css'
const Input = ({ onSubmit }) => (
  <section className="enter">
    <form onSubmit={e => onSubmit(e)}>
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
  </section>
);

class Form extends Component {
  state = {
    message: ""
  };

  onSubmit = async e => {
    e.preventDefault();
    // const registerResponse = await fetch(#########################, {
    //     method: 'POST',
    //     credentials: 'include',
    //     body: JSON.stringify(this.state),
    //     headers: {
    //         'Content-type' : 'application/json'
    //     }
    // })
  };

  render() {
    const { message } = this.state;
    return (
      <>
        <Input />
      </>
    );
  }
}

export default Form;
