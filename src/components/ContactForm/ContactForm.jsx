import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleAddContact = () => {
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState({ name: '', number: '' });
    this.props.handleAddContact(newContact);
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          id="nameInput"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleNameChange}
        />
        <label htmlFor="numberInput">Number</label>
        <input
          type="tel"
          id="numberInput"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleNumberChange}
        />
        <button type="button" onClick={this.handleAddContact}>
          Add contact
        </button>
      </div>
    );
  }
}

ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
