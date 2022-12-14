import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmitData }) => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const changeHandler = event => {
    const { name, value } = event.currentTarget;

    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const submitHandler = event => {
    event.preventDefault();
    const newContact = { name: contact.name, number: contact.number };

    onSubmitData(newContact);

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

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};

export default ContactForm;
