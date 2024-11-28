import React, { useState } from 'react';
import FormCrud from './formCrud';
import { 
  crearPaseo, 
  obtenerTodosPaseos, 
  obtenerPaseoPorId, 
  actualizarPaseo, 
  eliminarPaseo 
} from '../api/misService'; // Importa las funciones de servicio

const Paseo = () => {
  const [formData, setFormData] = useState({
    fecpas: '',
    horpas: '',
    tiepas: '',
    masid: '',
    pasid: '',
    novpas: '',
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
    const { fecpas, horpas, tiepas, masid, pasid, novpas } = formData;
    if (!fecpas || !horpas || !tiepas || !masid || !pasid || !novpas) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    return true;
  };

  // Crear un paseo
  const handleCreate = async () => {
    if (!validaForma()) return;
    try {
      const response = await crearPaseo({ info: formData });
      alert(`Paseo creado: ${JSON.stringify(response.data)}`);
      setFormData({
        fecpas: '',
        horpas: '',
        tiepas: '',
        masid: '',
        pasid: '',
        novpas: '',
      });
    } catch (error) {
      alert(`Error al crear paseo: ${error.message}`);
    }
  };

  // Consultar todos los paseos
  const handleReadAll = async () => {
    try {
      const response = await obtenerTodosPaseos();
      alert(`Paseos encontrados: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar paseos: ${error.message}`);
    }
  };

  // Consultar paseo por ID
  const handleReadById = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await obtenerPaseoPorId(id);
      alert(`Paseo encontrado: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar paseo: ${error.message}`);
    }
  };

  // Modificar un paseo por ID
  const handleUpdate = async () => {
    if (!id || !validaForma()) {
      alert('Debe ingresar un ID válido y completar el formulario');
      return;
    }
    try {
      const response = await actualizarPaseo(id, { info: formData });
      alert(`Paseo actualizado: ${JSON.stringify(response.data)}`);
      setFormData({
        fecpas: '',
        horpas: '',
        tiepas: '',
        masid: '',
        pasid: '',
        novpas: '',
      });
    } catch (error) {
      alert(`Error al modificar paseo: ${error.message}`);
    }
  };

  // Eliminar un paseo por ID
  const handleDelete = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await eliminarPaseo(id);
      alert(`Paseo eliminado: ${JSON.stringify(response.data)}`);
      setId('');
    } catch (error) {
      alert(`Error al eliminar paseo: ${error.message}`);
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

export default Paseo;





/*import React, { useState } from 'react';
import FormCrud from './formCrud';
import {crearPaseo, obtenerTodosPaseos, obtenerPaseoPorId, actualizarPaseo, eliminarPaseo,} from '../api/misService'; 

const Paseos = () => {
  const [formData, setFormData] = useState({
    fecpas: '',
    horpas: '',
    tiepas: '',
    masid: '',
    pasid: '',
    novpas: '',
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
    const { fecpas, horpas, tiepas, masid, pasid, novpas } = formData;
    if (!fecpas || !horpas || !tiepas || !masid || !pasid || !novpas) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    if (tiepas < 1 || tiepas > 3) {
      alert('La duración del paseo debe estar entre 1 y 3 horas');
      return false;
    }
    return true;
  };

  // Crear un paseo
  const handleCreate = async () => {
    if (!validaForma()) return;
    try {
      const response = await crearPaseo(formData);
      alert(`Paseo creado: ${JSON.stringify(response.data)}`);
      setFormData({
        fecpas: '',
        horpas: '',
        tiepas: '',
        masid: '',
        pasid: '',
        novpas: '',
      });
    } catch (error) {
      alert(`Error al crear paseo: ${error.message}`);
    }
  };

  // Consultar todos los paseos
  const handleReadAll = async () => {
    try {
      const response = await obtenerTodosPaseos();
      alert(`Paseos encontrados: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar paseos: ${error.message}`);
    }
  };

  // Consultar paseo por ID
  const handleReadById = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await obtenerPaseoPorId(id);
      alert(`Paseo encontrado: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar paseo: ${error.message}`);
    }
  };

  // Modificar un paseo por ID
  const handleUpdate = async () => {
    if (!id || !validaForma()) {
      alert('Debe ingresar un ID válido y completar el formulario');
      return;
    }
    try {
      const response = await actualizarPaseo(id, formData);
      alert(`Paseo actualizado: ${JSON.stringify(response.data)}`);
      setFormData({
        fecpas: '',
        horpas: '',
        tiepas: '',
        masid: '',
        pasid: '',
        novpas: '',
      });
    } catch (error) {
      alert(`Error al modificar paseo: ${error.message}`);
    }
  };

  // Eliminar un paseo por ID
  const handleDelete = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await eliminarPaseo(id);
      alert(`Paseo eliminado: ${JSON.stringify(response.data)}`);
      setId('');
    } catch (error) {
      alert(`Error al eliminar paseo: ${error.message}`);
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

export default Paseos;*/




/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import misService from '../api/misService';
import FormCrud from './formCrud';
import { setPaseo } from '../reducers';
import {Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const Paseo = () => {
  const paseos = useSelector((state) => state.app.paseo);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Inicializar useNavigate

  // Función para redirigir a Home
  const irAInicio = () => {
    navigate('/');
  };

  // Asumimos que el estado de `paseo` en Redux incluye `datosFormulario` e `id` para el manejo del formulario.
  const datosPaseo = paseos.datosFormulario || { fecha: '', HoraInicio: '', Duracion: '', IdMascota: '', IdPaseador: '', Novedades: '' };
  const id = paseos.id || '';

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    dispatch(setPaseo({ ...datosPaseo, [name]: value, id }));
  };

  const crearPaseo = async () => {
    try {
      const response = await misService.crearPaseo(datosPaseo);
      alert(`Paseo creado exitosamente: ${response.data.msg}`);
      obtenerTodosPaseos();
    } catch (error) {
      console.error('Error al crear el paseo:', error);
      alert('Error al crear el paseo');
    }
  };

  const obtenerTodosPaseos = async () => {
    try {
      const respuesta = await misService.obtenerTodosPaseos();
      dispatch(setPaseo({ lista: respuesta.data }));
    } catch (error) {
      console.error('Error al obtener paseos:', error);
    }
  };

  const obtenerPaseoPorId = async () => {
    try {
      const respuesta = await misService.obtenerPaseoPorId(id);
      dispatch(setPaseo({ lista: [respuesta.data] }));
    } catch (error) {
      console.error('Error al obtener el paseo:', error);
    }
  };

  const actualizarPaseo = async () => {
    try {
      await misService.actualizarPaseo(id, datosPaseo);
      alert('Paseo actualizado exitosamente');
      obtenerTodosPaseos();
    } catch (error) {
      console.error('Error al actualizar el paseo:', error);
      alert('Error al actualizar el paseo');
    }
  };

  const eliminarPaseo = async () => {
    try {
      await misService.eliminarPaseo(id);
      alert('Paseo eliminado exitosamente');
      obtenerTodosPaseos();
    } catch (error) {
      console.error('Error al eliminar el paseo:', error);
      alert('Error al eliminar el paseo');
    }
  };

  return (
    <div>
      <h2>Gestión de Paseos</h2>
      <FormCrud
        formData={datosPaseo}
        handleChange={manejarCambio}
        handleCreate={crearPaseo}
        handleReadAll={obtenerTodosPaseos}
        handleReadById={obtenerPaseoPorId}
        handleUpdate={actualizarPaseo}
        handleDelete={eliminarPaseo}
        id={id}
        setId={(nuevoId) => dispatch(setPaseo({ ...datosPaseo, id: nuevoId }))}
      />
        <div className="text-center mb-4">
        <Button variant="secondary" onClick={irAInicio}>
          Volver a Home
        </Button>
      </div>
      <div>
        <h3>Listado de Paseos</h3>
        <ul>
          {paseos.lista?.map((paseo) => (
            <li key={paseo._id}>{paseo.fecha} - {paseo.duracion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Paseo;*/
