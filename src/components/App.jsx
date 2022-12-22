import React from "react";
import { nanoid } from 'nanoid'
import { Form } from "./Form";
import { FormItem } from "./FormItem";
import { Filter } from './Filter'
import { Wrapper, Title, Subtitle } from "./App.styled";


export class App extends React.Component {

  state = {
    contacts:
      [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],

    filter: '',
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    const { contacts } = this.state;
    const checkContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
    if (checkContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))

  }

  filterByName = (e) => {
    this.setState({
      filter: e.currentTarget.value
    })
  }

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalized = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
  };

  handleDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  componentDidMount() {
    const getStorageContacts = localStorage.getItem('contacts')

    if (getStorageContacts !== null) {
      this.setState({
        contacts: JSON.parse(getStorageContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const visibleContacts = this.visibleContacts();

    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} />
        <Subtitle>Contacts</Subtitle>
        <Filter
          filterName={this.filterByName}
          value={this.state.filter}
        />
        <FormItem
          onDelete={this.handleDeleteContact}
          contacts={visibleContacts}
        />
      </Wrapper>
    )
  }

};
