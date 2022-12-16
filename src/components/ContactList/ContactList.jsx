import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

class ContactList extends Component {
  createList = () => {
    return this.props.contacts.map(contact => (
      <li key={contact.id}>
        {`${contact.name}: ${contact.number}`}
        <button onClick={() => this.props.onDelete(contact.id)}>Delete</button>
      </li>
    ));
  };

  render() {
    return <ul className={styles.contactList}>{this.createList()}</ul>;
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
