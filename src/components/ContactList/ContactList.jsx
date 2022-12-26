import { useDispatch, useSelector } from 'react-redux';

import { removeContactById, getFilter } from 'redux/phonebook.slice';

import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(getFilter);

  const deleteContactHandler = deletedContactId => {
    dispatch(removeContactById(deletedContactId));
  };

  const filteredArray = contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter)
  );

  const createList = filteredArray.map(contact => (
    <li key={contact.id}>
      {`${contact.name}: ${contact.number}`}
      <button onClick={() => deleteContactHandler(contact.id)}>Delete</button>
    </li>
  ));

  return <ul className={styles.contactList}>{createList}</ul>;
};

export default ContactList;
