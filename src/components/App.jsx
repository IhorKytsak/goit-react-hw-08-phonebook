import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <h3>Loading...</h3>}
      {error && !isLoading && (
        <h3 style={{ color: 'red' }}>{error || 'Error...'}</h3>
      )}
      {!isLoading && !error && <ContactList />}
    </div>
  );
};

export default App;
