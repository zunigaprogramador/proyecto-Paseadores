import React, { useState } from 'react';
import FormCrud from './formCrud';
import {
  crearDueno,
  obtenerTodosDuenos,
  obtenerDuenoPorId,
  actualizarDueno,
  eliminarDueno,
} from '../api/misService'; // Importa las funciones de servicio

const Dueno = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    email: '',
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
    const { nombre, telefono, direccion, email } = formData;
    if (!nombre || !telefono || !direccion || !email) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    return true;
  };

  // Crear un dueño
  const handleCreate = async () => {
    if (!validaForma()) return;
    try {
      const response = await crearDueno({ info: formData });
      alert(`Dueño creado: ${JSON.stringify(response.data)}`);
      setFormData({ nombre: '', telefono: '', direccion: '', email: '' });
    } catch (error) {
      alert(`Error al crear dueño: ${error.message}`);
    }
  };

  // Consultar todos los dueños
  const handleReadAll = async () => {
    try {
      const response = await obtenerTodosDuenos();
      alert(`Dueños encontrados: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar dueños: ${error.message}`);
    }
  };

  // Consultar dueño por ID
  const handleReadById = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await obtenerDuenoPorId(id);
      alert(`Dueño encontrado: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar dueño: ${error.message}`);
    }
  };

  // Modificar un dueño por ID
  const handleUpdate = async () => {
    if (!id || !validaForma()) {
      alert('Debe ingresar un ID válido y completar el formulario');
      return;
    }
    try {
      const response = await actualizarDueno(id, { info: formData });
      alert(`Dueño actualizado: ${JSON.stringify(response.data)}`);
      setFormData({ nombre: '', telefono: '', direccion: '', email: '' });
    } catch (error) {
      alert(`Error al modificar dueño: ${error.message}`);
    }
  };

  // Eliminar un dueño por ID
  const handleDelete = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await eliminarDueno(id);
      alert(`Dueño eliminado: ${JSON.stringify(response.data)}`);
      setId('');
    } catch (error) {
      alert(`Error al eliminar dueño: ${error.message}`);
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

export default Dueno;




/*import React, { useState } from 'react';
import FormCrud from './formCrud';
import {
  crearDueno,
  obtenerTodosDuenos,
  obtenerDuenoPorId,
  actualizarDueno,
  eliminarDueno,
} from '../api/misService'; // Importa las funciones de servicio

const Dueno = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    email: '',
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
    const { nombre, telefono, direccion, email } = formData;
    if (!nombre || !telefono || !direccion || !email) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    return true;
  };

  // Crear un dueño
  const handleCreate = async () => {
    if (!validaForma()) return;
    try {
      const response = await crearDueno(formData);
      alert(`Dueño creado: ${JSON.stringify(response.data)}`);
      setFormData({
        nombre: '',
        telefono: '',
        direccion: '',
        email: '',
      });
    } catch (error) {
      alert(`Error al crear dueño: ${error.message}`);
    }
  };

  // Consultar todos los dueños
  const handleReadAll = async () => {
    try {
      const response = await obtenerTodosDuenos();
      alert(`Dueños encontrados: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar dueños: ${error.message}`);
    }
  };

  // Consultar dueño por ID
  const handleReadById = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await obtenerDuenoPorId(id);
      alert(`Dueño encontrado: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar dueño: ${error.message}`);
    }
  };

  // Modificar un dueño por ID
  const handleUpdate = async () => {
    if (!id || !validaForma()) {
      alert('Debe ingresar un ID válido y completar el formulario');
      return;
    }
    try {
      const response = await actualizarDueno(id, formData);
      alert(`Dueño actualizado: ${JSON.stringify(response.data)}`);
      setFormData({
        nombre: '',
        telefono: '',
        direccion: '',
        email: '',
      });
    } catch (error) {
      alert(`Error al modificar dueño: ${error.message}`);
    }
  };

  // Eliminar un dueño por ID
  const handleDelete = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await eliminarDueno(id);
      alert(`Dueño eliminado: ${JSON.stringify(response.data)}`);
      setId('');
    } catch (error) {
      alert(`Error al eliminar dueño: ${error.message}`);
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

export default Dueno;*/



/*import React, { useState } from 'react';
import FormCrud from './formCrud';
import {
  crearDueno,
  obtenerTodosDuenos,
  obtenerDuenoPorId,
  actualizarDueno,
  eliminarDueno,
} from '../api/misService'; // Importa las funciones de servicio

const Duenos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    email: '',
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
    const { nombre, telefono, direccion, email } = formData;
    if (!nombre || !telefono || !direccion || !email) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    return true;
  };

  // Crear un dueño
  const handleCreate = async () => {
    if (!validaForma()) return;
    try {
      const response = await crearDueno(formData);
      alert(`Dueño creado: ${JSON.stringify(response.data.info)}`);
      setFormData({ nombre: '', telefono: '', direccion: '', email: '' });
    } catch (error) {
      alert(`Error al crear dueño: ${error.message}`);
    }
  };

  // Consultar todos los dueños
  const handleReadAll = async () => {
    try {
      const response = await obtenerTodosDuenos();
      alert(`Dueños encontrados: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar dueños: ${error.message}`);
    }
  };

  // Consultar dueño por ID
  const handleReadById = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await obtenerDuenoPorId(id);
      alert(`Dueño encontrado: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar dueño: ${error.message}`);
    }
  };

  // Modificar un dueño por ID
  const handleUpdate = async () => {
    if (!id || !validaForma()) {
      alert('Debe ingresar un ID válido y completar el formulario');
      return;
    }
    try {
      const response = await actualizarDueno(id, formData);
      alert(`Dueño actualizado: ${JSON.stringify(response.data)}`);
      setFormData({ nombre: '', telefono: '', direccion: '', email: '' });
    } catch (error) {
      alert(`Error al modificar dueño: ${error.message}`);
    }
  };

  // Eliminar un dueño por ID
  const handleDelete = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await eliminarDueno(id);
      alert(`Dueño eliminado: ${JSON.stringify(response.data)}`);
      setId('');
    } catch (error) {
      alert(`Error al eliminar dueño: ${error.message}`);
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

export default Duenos;*/


