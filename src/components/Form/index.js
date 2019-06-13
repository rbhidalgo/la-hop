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
  

  onTagClick = (currSelectedState, id, text) => {
    let {tags} = this.state;
    if(!currSelectedState){
        tags.push({id:id, text:text});
    }else{
        tags = tags.filter((item)=>{return item.id !== id});
    }
    this.setState({
        tags: tags
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
    const { message, location, date, peopleCount, peopleNames, physicalDescript, needsDescript, tags, name, org, selfDescript, email, phone, agreement, selectedDataSource } = this.state;
    return (
    <> 
        <h1>{message}</h1>
        <form onSubmit={this.onSubmit}>
            <textarea type="text" placeholder="location" name="location" onChange={this.props.changeHandler} value={location}/>
            {/* <input type="date" placeholder="date" name="date" onChange={this.props.changeHandler} value={date}/> */}
            <input type="text" placeholder="peopleCount" name="peopleCount" onChange={this.props.changeHandler} value={peopleCount}/>
            <input type="text" placeholder="peopleNames" name="peopleNames" onChange={this.props.changeHandler} value={peopleNames}/>
            <textarea
                type="text"
                placeholder="physicalDescript"
                name="physicalDescript"
                onChange={this.props.changeHandler}
                value={physicalDescript}
            />
            <textarea type="text" placeholder="needsDescript" name="needsDescript" onChange={this.props.changeHandler} value={needsDescript}/>
            <input type="text" placeholder="tags" name="tags"/>
            <input type="text" placeholder="name" name="name" onChange={this.props.changeHandler} value={name}/>
            <input type="text" placeholder="org" name="org" onChange={this.props.changeHandler} value={org}/>
            <textarea type="text" placeholder="selfDescript" name="selfDescript" onChange={this.props.changeHandler} value={selfDescript}/>
            <input type="text" placeholder="email" name="email" onChange={this.props.changeHandler} value={email}/>
            <input type="text" placeholder="phone" name="phone" onChange={this.props.changeHandler} value={phone}/>
            <input type="checkbox" name="agreement" />
            <TagButtons
                    dataSource={tagsList}
                    selectedDataSource={tags}
                    onTagClick={this.onTagClick}
            />
            <button type="submit">Submit</button>
        </form>
  
    </>
    );
  }
}

export default Form;
