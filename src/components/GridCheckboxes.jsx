// GridCheckboxes.js
import React, { useState } from "react";
import Checkbox from "./CheckBox";

const GridCheckboxes = ({ record, setRecord }) => {
  const [opciones, setOpciones] = useState({
    opcion1: false,
    opcion2: false,
    opcion3: false,
    opcion4: false,
  });

  const handleChange = (e) => {
    setOpciones({
      ...opciones,
      [e.target.id]: e.target.checked,
    });
    const checkedValue = opciones[e.target.id];
    console.log("🚀 ~ handleChange ~ checkedValue:", checkedValue);
    if (!checkedValue) {
      setRecord({
        ...record,
        operationZone: e.target.value,
      });
    } else {
      setRecord({
        ...record,
        operationZone: "",
      });
    }
    console.log("Check: ", record);
  };

  return (
    <div className="grid-checkboxes">
      <Checkbox
        label="Opción 1"
        id="opcion1"
        checked={opciones.opcion1}
        onChange={handleChange}
      />
      <Checkbox
        label="Opción 2"
        id="opcion2"
        checked={opciones.opcion2}
        onChange={handleChange}
      />
      <Checkbox
        label="Opción 3"
        id="opcion3"
        checked={opciones.opcion3}
        onChange={handleChange}
      />
      <Checkbox
        label="Opción 4"
        id="opcion4"
        checked={opciones.opcion4}
        onChange={handleChange}
      />
    </div>
  );
};

export default GridCheckboxes;
