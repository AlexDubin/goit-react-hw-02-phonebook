import React from 'react';

const ContactsList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}: {formatPhoneNumber(contact.number)}</p>
          <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>

          
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

function formatPhoneNumber(phoneNumber) {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return match[1] + '-' + match[2] + '-' + match[3];
  }
  return phoneNumber;
}

