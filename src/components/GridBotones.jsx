// GridBotones.js
import React from "react";
import Boton from "./Boton";

const categories = [
  "Libreria",
  "Farmacia",
  "Electrodomesticos",
  "Venta de Ropa",
  "Venta de Zapatillas",
  "Articulos de Limpieza",
  "Articulos de Limpieza del Hogar",
  "Accesorios de Computadora",
  "Plasticos Desechables",
  "Plasticos",
  "Abarrotes",
  "Condimentos",
  "Multitienda",
  "Licoreria",
  "Chucheria",
  "Chocolateria",
  "Venta de ",
];

const GridBotones = ({ record, setRecord }) => {
  const handleClick = (text) => {
    setRecord({
      ...record,
      typeStore: text,
    });
    console.log("Botón presionado:", text);
  };

  return (
    <div className="grid-botones">
      {categories.map((item) => (
        <Boton key={item} texto={item} onClick={() => handleClick(item)} />
      ))}
    </div>
  );
};

export default GridBotones;
