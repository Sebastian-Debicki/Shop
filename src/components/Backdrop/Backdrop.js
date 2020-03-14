import React from 'react';

const Backdrop = ({ clicked, className }) => {
  return (
    <div onClick={clicked} className={className}></div>
  );
}

export default Backdrop;