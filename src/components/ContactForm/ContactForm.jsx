import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const changeHandler = event => {
    const { name, value } = event.currentTarget;

    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const submitHandler = event => {
    event.preventDefault();

    const contactNames = contacts.map(contact => contact.name);

    if (!contactNames.includes(contact.name)) {
      dispatch(
        addContact({
          name: contact.name,
          number: contact.number,
        })
      );
    } else {
      alert(`${contact.name} is already in contacts.`);
    }

    setContact({ name: '', number: '' });
  };

  return (
    <div className={styles.contactFormContainer}>
      <form type="submit" onSubmit={submitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={changeHandler}
            value={contact.name}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={changeHandler}
            value={contact.number}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
