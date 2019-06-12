
    
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// // import './Register.css'
const Input = ({onSubmit}) => 
    <section  className="enter">
        <form onSubmit={e => onSubmit(e)}>
            <textarea type="text" placeholder="location" name="location"></textarea>
            <input type="date" placeholder="date" name="date"></input>
            <input type="text" placeholder="peopleCount" name="peopleCount"></input>
            <input type="text" placeholder="peopleNames" name="peopleNames"></input>
            <textarea type="text" placeholder="pyshicalDescript" name="pyshicalDescript"></textarea>
            <textarea type="text" placeholder="needsDescript" name="needsDescript"></textarea>
            <input type="text" placeholder="tags" name="tags"></input>
            <input type="text" placeholder="name" name="name"></input>
            <input type="text" placeholder="org" name="org"></input>
            <textarea type="text" placeholder="selfDescript" name="selfDescript"></textarea>
            <input type="text" placeholder="email" name="email"></input>
            <input type="text" placeholder="phone" name="phone"></input>
            <input type="checkbox" name="agreement"></input>
            <button type="submit">Submit</button>
        </form>
    </section>

class Form extends Component {

    state = {
        message: ""
    }

    onSubmit = async (e) => {
        e.preventDefault();
        // const registerResponse = await fetch(#########################, {
        //     method: 'POST',
        //     credentials: 'include',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'Content-type' : 'application/json'
        //     }
        // })
    }

    render(){
        const { message } = this.state
        return(
            <>
                <Input />
            </>
        )
    }
}




export default Form