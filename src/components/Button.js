import React from 'react';

const Button = ({ type, className, text, onClick }) => (
  <button
    type={type || 'button'}
    className={`button ${className || ''}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
