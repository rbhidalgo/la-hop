
    
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// // import './Register.css'

class Form extends Component {

    state = {
        message: ""
    }

    onSubmit = async (e) => {
                e.preventDefault();
                const registerResponse = await fetch(#########################, {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(this.state),
                    headers: {
                        'Content-type' : 'application/json'
                    }
                })
            }

    render(){
        const { message } = this.state
        return(
        <>
            <form onSubmit={e => onSubmit(e)}>
                <input type="text" placeholder="" name="location"></input>
                <input type="text" placeholder="" name="date"></input>
                <input type="text" placeholder="" name="peopleCount"></input>
                <input type="text" placeholder="" name="peopleNames"></input>
                <input type="text" placeholder="" name="pyshicalDescript"></input>
                <input type="text" placeholder="" name="needsDescript"></input>
                <input type="text" placeholder="" name="tags"></input>
                <input type="text" placeholder="" name="name"></input>
                <input type="text" placeholder="" name="org"></input>
                <input type="text" placeholder="" name="selfDescript"></input>
                <input type="text" placeholder="" name="email"></input>
                <input type="text" placeholder="" name="phone"></input>
                <input type="text" placeholder="" name="agreement"></input>
                <button type="submit">Submit</button>
            </form>
        </>
        )
    }
}




export default Form