import React from "react";
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
import { FormItem } from "./FormItem/FormItem";


export class App extends React.Component {

  state = {
    contacts: [],
    name: ''
  }


addContact = text => {
console.log(text)
const contact = {
  id: nanoid(),
  name: text,
}
this.setState({
  contacts: [contact, ...this.state.contacts]
})
console.log(contact)
  }
  handleDeleteContact = nameId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== nameId)
    }))
  }

render(){
  return(
    <div>
      <h1>Phonebook</h1>
<Form onSubmit={this.addContact}/>
<FormItem onDelete={this.handleDeleteContact}
name={this.state.contacts}/>
    </div>
  )
}
  
};
