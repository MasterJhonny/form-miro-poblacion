// Checkbox.js
import React from 'react';

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <label className="boton"htmlFor={id}>{label}
        <input type="checkbox" id={id} value={label} checked={checked} onChange={onChange} />
      </label>
    </div>
  );
};

export default Checkbox;
