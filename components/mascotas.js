import React, { useState } from 'react';
import FormCrud from './formCrud';
import { 
  crearMascota, 
  obtenerTodasMascotas, 
  obtenerMascotaPorId, 
  actualizarMascota, 
  eliminarMascota 
} from '../api/misService'; // Importa las funciones de servicio

const Mascotas = () => {
  const [formData, setFormData] = useState({
    nommas: '',
    edad: '',
    raza: '',
    genero: '',
    recomendaciones: '',
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
    const { nommas, edad, raza, genero, recomendaciones } = formData;
    if (!nommas || !edad || !raza || !genero || !recomendaciones) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    return true;
  };

  // Crear una mascota
  const handleCreate = async () => {
    if (!validaForma()) return;
    try {
      const response = await crearMascota({ info: formData });
      alert(`Mascota creada: ${JSON.stringify(response.data)}`);
      setFormData({
        nommas: '',
        edad: '',
        raza: '',
        genero: '',
        recomendaciones: '',
      });
    } catch (error) {
      alert(`Error al crear mascota: ${error.message}`);
    }
  };

  // Consultar todas las mascotas
  const handleReadAll = async () => {
    try {
      const response = await obtenerTodasMascotas();
      alert(`Mascotas encontradas: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar mascotas: ${error.message}`);
    }
  };

  // Consultar mascota por ID
  const handleReadById = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await obtenerMascotaPorId(id);
      alert(`Mascota encontrada: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar mascota: ${error.message}`);
    }
  };

  // Modificar una mascota por ID
  const handleUpdate = async () => {
    if (!id || !validaForma()) {
      alert('Debe ingresar un ID válido y completar el formulario');
      return;
    }
    try {
      const response = await actualizarMascota(id, { info: formData });
      alert(`Mascota actualizada: ${JSON.stringify(response.data)}`);
      setFormData({
        nommas: '',
        edad: '',
        raza: '',
        genero: '',
        recomendaciones: '',
      });
    } catch (error) {
      alert(`Error al modificar mascota: ${error.message}`);
    }
  };

  // Eliminar una mascota por ID
  const handleDelete = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await eliminarMascota(id);
      alert(`Mascota eliminada: ${JSON.stringify(response.data)}`);
      setId('');
    } catch (error) {
      alert(`Error al eliminar mascota: ${error.message}`);
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

export default Mascotas;




/*import React, { useState } from 'react';
import FormCrud from './formCrud';
import { crearMascota, obtenerTodasMascotas, obtenerMascotaPorId, actualizarMascota, eliminarMascota, } from '../api/misService';

const Mascotas = () => {
  const [formData, setFormData] = useState({
    nommas: '',
    edad: '',
    raza: '',
    genero: '',
    recomendaciones: '',
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
    const { nommas, edad, raza, genero, recomendaciones } = formData;
    if (!nommas || !edad || !raza || !genero || !recomendaciones) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    if (isNaN(edad) || edad <= 0) {
      alert('La edad debe ser un número mayor que 0');
      return false;
    }
    if (genero !== '1' && genero !== '2') {
      alert('El género debe ser 1 (Macho) o 2 (Hembra)');
      return false;
    }
    return true;
  };

  // Crear una mascota
  const handleCreate = async () => {
    if (!validaForma()) return;
    try {
      const response = await crearMascota(formData);
      alert(`Mascota creada: ${JSON.stringify(response.data)}`);
      setFormData({
        nommas: '',
        edad: '',
        raza: '',
        genero: '',
        recomendaciones: '',
      });
    } catch (error) {
      alert(`Error al crear mascota: ${error.message}`);
    }
  };

  // Consultar todas las mascotas
  const handleReadAll = async () => {
    try {
      const response = await obtenerTodasMascotas();
      alert(`Mascotas encontradas: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar mascotas: ${error.message}`);
    }
  };

  // Consultar mascota por ID
  const handleReadById = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await obtenerMascotaPorId(id);
      alert(`Mascota encontrada: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar mascota: ${error.message}`);
    }
  };

  // Modificar una mascota por ID
  const handleUpdate = async () => {
    if (!id || !validaForma()) {
      alert('Debe ingresar un ID válido y completar el formulario');
      return;
    }
    try {
      const response = await actualizarMascota(id, formData);
      alert(`Mascota actualizada: ${JSON.stringify(response.data)}`);
      setFormData({
        nommas: '',
        edad: '',
        raza: '',
        genero: '',
        recomendaciones: '',
      });
    } catch (error) {
      alert(`Error al modificar mascota: ${error.message}`);
    }
  };

  // Eliminar una mascota por ID
  const handleDelete = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await eliminarMascota(id);
      alert(`Mascota eliminada: ${JSON.stringify(response.data)}`);
      setId('');
    } catch (error) {
      alert(`Error al eliminar mascota: ${error.message}`);
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

export default Mascotas;*/




