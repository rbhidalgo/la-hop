
    
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// // import './Register.css'



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


    // var curr = new Date();
    // curr.setDate(curr.getDate() + 3);
    // var date = curr.toISOString().substr(0,10);
    // <input id="dateRequired" type="date" name="dateRequired" defaultValue={date} /> 

    render(){
        const { message } = this.state
        return(
            <>
                <form onSubmit={e => this.onSubmit(e)}>
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
            </>
        )
    }
}




export default Form