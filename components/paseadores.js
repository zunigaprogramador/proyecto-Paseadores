import React, { useState } from 'react';
import FormCrud from './formCrud';
import {
  crearPaseador,
  obtenerTodosPaseadores,
  obtenerPaseadorPorId,
  actualizarPaseador,
  eliminarPaseador,
} from '../api/misService'; // Importa las funciones de servicio

const Paseadores = () => {
  const [formData, setFormData] = useState({
    nompas: '',
    tipide: 'CC',
    numide: '',
    numcelpas: '',
    email: '',
    tarifa: '',
    calpas: 1,
  });
  const [id, setId] = useState('');

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validar formulario
  const validaForma = () => {
    const { nompas, tipide, numide, numcelpas, email, tarifa } = formData;
    if (!nompas || !tipide || !numide || !numcelpas || !email || !tarifa) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    return true;
  };

  // Crear un paseador
  const handleCreate = async () => {
    if (!validaForma()) return;
    try {
      const response = await crearPaseador({ info: formData });
      alert(`Paseador creado: ${JSON.stringify(response.data)}`);
      setFormData({
        nompas: '',
        tipide: 'CC',
        numide: '',
        numcelpas: '',
        email: '',
        tarifa: '',
        calpas: 1,
      });
    } catch (error) {
      alert(`Error al crear paseador: ${error.message}`);
    }
  };

  // Consultar todos los paseadores
  const handleReadAll = async () => {
    try {
      const response = await obtenerTodosPaseadores();
      alert(`Paseadores encontrados: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar paseadores: ${error.message}`);
    }
  };

  // Consultar paseador por ID
  const handleReadById = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await obtenerPaseadorPorId(id);
      alert(`Paseador encontrado: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar paseador: ${error.message}`);
    }
  };

  // Modificar un paseador por ID
  const handleUpdate = async () => {
    if (!id || !validaForma()) {
      alert('Debe ingresar un ID válido y completar el formulario');
      return;
    }
    try {
      const response = await actualizarPaseador(id, { info: formData });
      alert(`Paseador actualizado: ${JSON.stringify(response.data)}`);
      setFormData({
        nompas: '',
        tipide: 'CC',
        numide: '',
        numcelpas: '',
        email: '',
        tarifa: '',
        calpas: 1,
      });
    } catch (error) {
      alert(`Error al modificar paseador: ${error.message}`);
    }
  };

  // Eliminar un paseador por ID
  const handleDelete = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await eliminarPaseador(id);
      alert(`Paseador eliminado: ${JSON.stringify(response.data)}`);
      setId('');
    } catch (error) {
      alert(`Error al eliminar paseador: ${error.message}`);
    }
  };

  return (
    <FormCrud
      formData={formData}
      handleChange={handleChange}
      handleCreate={handleCreate}
      handleReadAll={handleReadAll}
      handleReadById={handleReadById}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
      id={id}
      setId={setId}
      validate={validaForma}
    />
  );
};

export default Paseadores;






/*import React, { useState } from 'react';
import FormCrud from './formCrud';
import {crearPaseador, obtenerTodosPaseadores, obtenerPaseadorPorId, actualizarPaseador, eliminarPaseador} from '../api/misService'; // Importa las funciones de servicio

const Paseadores = () => {
  const [formData, setFormData] = useState({
    
    nompas: '',
    tipide: '',
    numide: '',
    numcelpas: '',
    email: '',
    numcelemp: '',
    diremp: '',
    dirpas: '',
    imgpas: null,
    tarifa: '',
    calpas: 1,
  });
  const [id, setId] = useState('');

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validar formulario
  const validaForma = () => {
    const { nompas, tipide, numide, numcelpas, email,  numcelemp,  diremp, dirpas, imgpas, tarifa,  calpas } = formData;
    if (!nompas || !tipide || !numide || !numcelpas || !email || !numcelemp || !diremp || !dirpas || !imgpas || !tarifa || !calpas) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    return true;
  };

// Crear un paseador
const handleCreate = async () => {
  if (!validaForma()) return;
  try {
    // Asegúrate de pasar 'formData' directamente en la solicitud
    const response = await crearPaseador(formData); // Aquí ya no es necesario envolver en 'info'
    alert(`Paseador creado: ${JSON.stringify(response.data)}`);
    setFormData({
      nompas: '',
      tipide: 'CC',
      numide: '',
      numcelpas: '',
      email: '',
      numcelemp: '',
      diremp: '',
      dirpas: '',
      imgpas: null,
      tarifa: '',
      calpas: 1,
    });
  } catch (error) {
    alert(`Error al crear paseador: ${error.message}`);
  }
};

  
  // Consultar todos los paseadores
  const handleReadAll = async () => {
    try {
      const response = await obtenerTodosPaseadores();
      alert(`Paseadores encontrados: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar paseadores: ${error.message}`);
    }
  };

  // Consultar paseador por ID
  const handleReadById = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await obtenerPaseadorPorId(id);
      alert(`Paseador encontrado: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar paseador: ${error.message}`);
    }
  };

  // Modificar un paseador por ID
  const handleUpdate = async () => {
    if (!id || !validaForma()) {
      alert('Debe ingresar un ID válido y completar el formulario');
      return;
    }
    try {
      const response = await actualizarPaseador(id, formData);
      alert(`Paseador actualizado: ${JSON.stringify(response.data)}`);
      setFormData({
        nompas: '',
        tipide: 'CC',
        numide: '',
        numcelpas: '',
        email: '',
        numcelemp: '',
        diremp: '',
        dirpas: '',
        imgpas: null,
        tarifa: '',
        calpas: 1,
      });
    } catch (error) {
      alert(`Error al modificar paseador: ${error.message}`);
    }
  };

  // Eliminar un paseador por ID
  const handleDelete = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await eliminarPaseador(id);
      alert(`Paseador eliminado: ${JSON.stringify(response.data)}`);
      setId('');
    } catch (error) {
      alert(`Error al eliminar paseador: ${error.message}`);
    }
  };

  return (
    <FormCrud
      formData={formData}
      handleChange={handleChange}
      handleCreate={handleCreate}
      handleReadAll={handleReadAll}
      handleReadById={handleReadById}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
      id={id}
      setId={setId}
      validate={validaForma}
    />
  );
};

export default Paseadores;*/



