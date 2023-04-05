import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';

import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const listOfContacts = filteredContacts.map(contact => (
    <li key={contact.id}>
      {`${contact.name}: ${contact.number}`}
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  ));

  return <ul className={styles.contactList}>{listOfContacts}</ul>;
};

export default ContactList;
