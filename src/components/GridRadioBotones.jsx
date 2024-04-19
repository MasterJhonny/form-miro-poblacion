// GridRadioBotones.js
import React, { useState } from 'react';
import RadioBoton from './RadioBoton';

const localidades = [
  "Villa Dolores",
  "12 de Octubre",
  "16 de Julio",
  "Rio Seco",
  "Villa Adela",
  "Cruce Villa Adela",
  "Villa Bolivar D",
  "Senkata",
  "Saletite"
];

const GridRadioBotones = ({ record, setRecord }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setOpcionSeleccionada(value);
    setRecord({
      ...record,
      operationZone: value
    })
    console.log("🚀 ~ handleChange ~ target:", value)
  };
  return (
    <div className="grid-radio-botones">
      {
        localidades.map(item => (
          <RadioBoton key={item} label={item} value={item} checked={opcionSeleccionada === item} onChange={handleChange} />
        ))
      }
    </div>
  );
};

export default GridRadioBotones;
