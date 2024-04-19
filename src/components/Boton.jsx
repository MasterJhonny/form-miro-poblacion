// Boton.js
import React from 'react';

const Boton = ({ texto, onClick }) => {
  return (
    <button type='button' className="boton" onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;
