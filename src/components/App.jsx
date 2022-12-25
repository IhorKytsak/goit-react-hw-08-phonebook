import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import {
  addContact,
  removeContactById,
  getFilter,
  setFilterValue,
} from '../redux/phonebook.slice';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(getFilter);

  const formSubmitHandler = newContactData => {
    const contactNames = contacts.map(contact => contact.name);

    if (!contactNames.includes(newContactData.name)) {
      dispatch(
        addContact({
          id: nanoid(),
          name: newContactData.name,
          number: newContactData.number,
        })
      );
    } else {
      alert(`${newContactData.name} is already in contacts.`);
    }
  };

  const deleteContactHandler = deletedContactId => {
    dispatch(removeContactById(deletedContactId));
  };

  const changeFilterHandler = filterData => {
    dispatch(setFilterValue(filterData));
  };

  const filteredArray = contacts => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter)
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onSubmitData={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChangeFilter={changeFilterHandler} />
      <ContactList
        contacts={filteredArray(contacts)}
        onDelete={deleteContactHandler}
      />
    </div>
  );
};

export default App;
