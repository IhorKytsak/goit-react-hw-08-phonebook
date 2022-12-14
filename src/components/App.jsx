import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  const initState = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  const [state, setState] = useState(initState);

  const formSubmitHandler = newContactData => {
    const contactNames = state.contacts.map(contact => contact.name);

    if (!contactNames.includes(newContactData.name)) {
      const extendedContacts = [
        ...state.contacts,
        {
          id: nanoid(),
          name: newContactData.name,
          number: newContactData.number,
        },
      ];

      setState(prevState => ({
        ...prevState,
        contacts: extendedContacts,
      }));
    } else {
      alert(`${newContactData.name} is already in contacts.`);
    }
  };

  const deleteContactHandler = deletedContactId => {
    const updatedContacts = state.contacts.filter(
      contact => contact.id !== deletedContactId
    );
    setState(prevState => ({
      ...prevState,
      contacts: [...updatedContacts],
    }));
  };

  const changeFilterHandler = filterData => {
    setState(prevState => ({
      ...prevState,
      filter: `${filterData}`,
    }));
  };

  const filteredArray = contacts => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(state.filter)
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onSubmitData={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChangeFilter={changeFilterHandler} />
      <ContactList
        contacts={filteredArray(state.contacts)}
        onDelete={deleteContactHandler}
      />
    </div>
  );
};

export default App;
