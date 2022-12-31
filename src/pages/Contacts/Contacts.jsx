import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsLoading, selectError } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader//Loader';

import styles from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contactsWrapper}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {error && !isLoading && (
        <h3 style={{ color: 'red' }}>{error || 'Error...'}</h3>
      )}
      {!isLoading && !error && <ContactList />}
    </div>
  );
};

export default Contacts;
