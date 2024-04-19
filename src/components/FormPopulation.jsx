import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GridBotones from "./GridBotones";
import GridRadioBotones from "./GridRadioBotones";
import { postData } from '../api/api.datos';


const FormPopulation = () => {
  const [record, setRecord] = useState({
    operationZone: "",
    typeStore: "",
  });

  const handleInputChange = (e) => {
    setRecord({
      ...record,
      typeStore: e.target.value,
    });
  };

  const sendData = async (data) => {
    try {
      const rta = await postData(data);
      console.log("🚀 ~ sendData ~ data:", rta);
      if (rta.create) {
        // Mostrar notificación de éxito
        toast.success('¡Operación exitosa!', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        throw new Error('Ups, ocurrio un error!');
      }
    } catch (error) {
      console.log("🚀 ~ sendData ~ error:", error)
      toast.error('Ocurrió un error', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    if (record.typeStore != "") {
      console.log("Enviar datos:", record);
      setRecord({
        ...record,
        typeStore: "",
      });
      sendData(record)
    }
  };

  return (
    <div className="card">
      <ToastContainer />
      <h2>Registro de la Población</h2>
      <form className="registro-poblacion-form" onSubmit={handleSubmit}>
        <label htmlFor="operationArea">1. Zona de Operación:</label>
        <GridRadioBotones record={record} setRecord={setRecord} />
        <label htmlFor="typeStore">2. Tipo de tienda:</label>
        <GridBotones record={record} setRecord={setRecord} />
        <br />
        <input
          type="text"
          id="typeStore"
          name="typeStore"
          value={record.typeStore}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormPopulation;
