import React from 'react';

const Contact = ({ id, firstName, lastName, phone, email, onClick, onRemoveClick }) => (
  <div className="contact" onClick={e => onClick(e, id)}>
    <span className="contact__remove" onClick={e => onRemoveClick(e, id)}>&times;</span>

    <h3 className="contact__name">
      {firstName} {lastName}
    </h3>

    <div className="contact__info">
      {phone}<br />
      {email}
    </div>
  </div>
);

export default Contact;
