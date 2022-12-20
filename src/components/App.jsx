import React from "react";
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
import { FormItem } from "./FormItem/FormItem";


export class App extends React.Component {

  state = {
    contacts: [],
    name: '',
    number:'',
  }


  addContact = text => {
    console.log(text)
    const contact = {
      id: nanoid(),
      name: text,
      number: text,
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))
    
  }
  handleDeleteContact = nameId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== nameId)
    }))
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <FormItem
          onDelete={this.handleDeleteContact}
          name={this.state.contacts}
           />
      </div>
    )
  }

};
