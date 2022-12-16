import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import {
  getlocalStorageData,
  setlocalStorageData,
} from '../utils/local-storage';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLS = getlocalStorageData();

    if (contactsFromLS) {
      this.setState({ contacts: contactsFromLS });
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      setlocalStorageData(this.state.contacts);
    }
  }

  formSubmitHandler = newContactData => {
    const contactNames = this.state.contacts.map(contact => contact.name);

    if (!contactNames.includes(newContactData.name)) {
      const extendedContacts = [
        ...this.state.contacts,
        {
          id: nanoid(),
          name: newContactData.name,
          number: newContactData.number,
        },
      ];

      this.setState({ contacts: extendedContacts });
    } else {
      alert(`${newContactData.name} is already in contacts.`);
    }
  };

  deleteContactHandler = deletedContactId => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== deletedContactId
    );
    this.setState({ contacts: updatedContacts });
  };

  changeFilterHandler = filterData => {
    this.setState({
      filter: `${filterData}`,
    });
  };

  filteredArray = contacts => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmitData={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChangeFilter={this.changeFilterHandler} />
        <ContactList
          contacts={this.filteredArray(this.state.contacts)}
          onDelete={this.deleteContactHandler}
        />
      </div>
    );
  }
}

export default App;
