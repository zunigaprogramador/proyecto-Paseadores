import React, { useState } from 'react';
import FormCrud from './formCrud';
import { crearUsuario, obtenerTodosUsuarios, obtenerUsuarioPorId, actualizarUsuario, eliminarUsuario,} from '../api/misService'; // Importa las funciones de servicio

const Usuarios = () => {
  const [formData, setFormData] = useState({ usuario: '', password: '' });
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
    const { usuario, password } = formData;
    if (!usuario || !password) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    return true;
  };

  // Crear un usuario
  const handleCreate = async () => {
    if (!validaForma()) return;
    try {
      const response = await crearUsuario({ info: formData });
      alert(`Usuario creado: ${JSON.stringify(response.data)}`);
      setFormData({ usuario: '', password: '' });
    } catch (error) {
      alert(`Error al crear usuario: ${error.message}`);
    }
  };

  // Consultar todos los usuarios
  const handleReadAll = async () => {
    try {
      const response = await obtenerTodosUsuarios();
      alert(`Usuarios encontrados: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar usuarios: ${error.message}`);
    }
  };

  // Consultar usuario por ID
  const handleReadById = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await obtenerUsuarioPorId(id);
      alert(`Usuario encontrado: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar usuario: ${error.message}`);
    }
  };

  // Modificar un usuario por ID
  const handleUpdate = async () => {
    if (!id || !validaForma()) {
      alert('Debe ingresar un ID válido y completar el formulario');
      return;
    }
    try {
      const response = await actualizarUsuario(id, { info: formData });
      alert(`Usuario actualizado: ${JSON.stringify(response.data)}`);
      setFormData({ usuario: '', password: '' });
    } catch (error) {
      alert(`Error al modificar usuario: ${error.message}`);
    }
  };

  // Eliminar un usuario por ID
  const handleDelete = async () => {
    if (!id) {
      alert('Debe ingresar un ID');
      return;
    }
    try {
      const response = await eliminarUsuario(id);
      alert(`Usuario eliminado: ${JSON.stringify(response.data)}`);
      setId('');
    } catch (error) {
      alert(`Error al eliminar usuario: ${error.message}`);
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

export default Usuarios;



/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import misService from '../api/misService';
import FormCrud from './formCrud';
import { setUsuario } from '../reducers';
import {Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate


const Usuarios = () => {
  const usuarios = useSelector((state) => state.app.usuario || []); // Acceso al estado de Redux
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Inicializar useNavigate

  // Función para redirigir a Home
  const irAInicio = () => {
    navigate('/');
  };

  const [id, setId] = React.useState(''); // Puedes mantener esto si solo lo necesitas para la búsqueda por ID
  const [datosUsuario, setDatosUsuario] = React.useState({
    usuario: '',
    password: '',
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosUsuario({ ...datosUsuario, [name]: value });
  };

  const crearUsuario = async () => {
    try {
      const response = await misService.crearUsuario(datosUsuario);
      alert(`Usuario creado exitosamente: ${response.data.msg}`);
      obtenerTodosUsuarios(); // Actualiza el estado después de crear
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      alert('Error al crear el usuario');
    }
  };

  const obtenerTodosUsuarios = async () => {
    try {
      const response = await misService.obtenerTodosUsuarios();
      dispatch(setUsuario(response.data)); // Actualiza el estado en Redux
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  const obtenerUsuarioPorId = async () => {
    try {
      const response = await misService.obtenerUsuarioPorId(id);
      dispatch(setUsuario([response.data])); // Maneja un solo usuario en un array
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
    }
  };

  const actualizarUsuario = async () => {
    try {
      await misService.actualizarUsuario(id, datosUsuario);
      alert('Usuario actualizado exitosamente');
      obtenerTodosUsuarios(); // Refresca la lista
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      alert('Error al actualizar el usuario');
    }
  };

  const eliminarUsuario = async () => {
    try {
      await misService.eliminarUsuario(id);
      alert('Usuario eliminado exitosamente');
      obtenerTodosUsuarios(); // Refresca la lista
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      alert('Error al eliminar el usuario');
    }
  };

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <FormCrud
        formData={datosUsuario}
        handleChange={manejarCambio}
        handleCreate={crearUsuario}
        handleReadAll={obtenerTodosUsuarios}
        handleReadById={obtenerUsuarioPorId}
        handleUpdate={actualizarUsuario}
        handleDelete={eliminarUsuario}
        id={id}
        setId={setId}
      />
       <div className="text-center mb-4">
        <Button variant="secondary" onClick={irAInicio}>
          Volver a Home
        </Button>
      </div>
      <div>
        <h3>Listado de Usuarios</h3>
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario._id}>{usuario.usuario} - {usuario.password}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Usuarios;*/





