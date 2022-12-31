import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';

import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredArray = contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter)
  );

  const createList = filteredArray.map(contact => (
    <li key={contact.id}>
      {`${contact.name}: ${contact.number}`}
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  ));

  return <ul className={styles.contactList}>{createList}</ul>;
};

export default ContactList;
