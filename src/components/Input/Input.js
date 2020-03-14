import React from 'react';

const Input = ({ type, changed, value, name }) => {
  return (
    <div className="input-box">
      <input className="input" type={type} onChange={changed} value={value} placeholder={name} id={name} />
      <label className="input__label" htmlFor={name} >{name}</label>
    </div>
  );
}

export default Input;