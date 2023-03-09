import React from 'react';

import './Button.css';

/*
  onClick => (event) => void
  type => primary | secondary | danger | warning
*/

const TYPES = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  warning: 'warning',
};

const Button = (props) => {
  const { children, onClick, size, type } = props;

  const resultType = TYPES[type] || TYPES['default'];

  const classes = ['button', resultType].join(' ');

  return (
    <button className={classes} onClick={(event) => onClick?.(event)}>
      {children}
    </button>
  );
};

export default Button;
