// RadioBoton.js
import React from 'react';

const RadioBoton = ({ label, value, checked, onChange }) => {
  return (
    <div className="radio-boton-container">
      <label className="boton" htmlFor={label}>{label}
        <input type="radio" id={label} value={value} checked={checked} onChange={onChange} />
      </label>
    </div>
  );
};

export default RadioBoton;
