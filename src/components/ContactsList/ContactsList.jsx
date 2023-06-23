// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactsList.module.css';

// const ContactsList = ({ contacts }) => {
//   return (
//     <ul>
//       {contacts.map(({ id, name, number }) => (
//         <li key={id} className={css.contact}>
//           {name}: {number}
//         </li>
//       ))}
//     </ul>
//   );
// };

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };


// export default ContactsList;

import React from 'react';

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}: {formatPhoneNumber(contact.number)}</p>
          
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

