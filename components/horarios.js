import React, { useState } from 'react';
import FormCrud from './formCrud';
import { 
  crearHorario, 
  obtenerHorariosPorPaseador, 
  verificarDisponibilidad 
} from '../api/misService'; // Importa las funciones de servicio

const Horarios = () => {
  const [formData, setFormData] = useState({
    paseadorId: '',
    fecha: '',
    horaInicio: '',
    horaFin: '',
  });
  const [id, setId] = useState(''); // Paseador ID para consultar horarios
  const [disponibilidad, setDisponibilidad] = useState(null); // Resultado de disponibilidad

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validar formulario
  const validaForma = () => {
    const { paseadorId, fecha, horaInicio, horaFin } = formData;
    if (!paseadorId || !fecha || !horaInicio || !horaFin) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    return true;
  };

  // Crear un horario
  const handleCreate = async () => {
    if (!validaForma()) return;
    try {
      const response = await crearHorario(formData);
      alert(`Horario creado: ${JSON.stringify(response.data)}`);
      setFormData({ paseadorId: '', fecha: '', horaInicio: '', horaFin: '' });
    } catch (error) {
      alert(`Error al crear horario: ${error.message}`);
    }
  };

  // Consultar horarios por ID del paseador
  const handleReadAll = async () => {
    if (!id) {
      alert('Debe ingresar un ID de paseador');
      return;
    }
    try {
      const response = await obtenerHorariosPorPaseador(id);
      alert(`Horarios encontrados: ${JSON.stringify(response.data)}`);
    } catch (error) {
      alert(`Error al consultar horarios: ${error.message}`);
    }
  };

  // Verificar disponibilidad
  const handleCheckAvailability = async () => {
    if (!validaForma()) return;
    try {
      const response = await verificarDisponibilidad(formData);
      setDisponibilidad(response.data);
      alert(`Disponibilidad: ${response.data ? 'Disponible' : 'No disponible'}`);
    } catch (error) {
      alert(`Error al verificar disponibilidad: ${error.message}`);
    }
  };

  return (
    <FormCrud
      formData={formData}
      handleChange={handleChange}
      handleCreate={handleCreate}
      handleReadAll={handleReadAll}
      handleReadById={handleCheckAvailability} // Verificar disponibilidad usando "Read by ID"
      id={id}
      setId={setId}
      validate={validaForma}
      extraContent={
        disponibilidad !== null && (
          <p>Disponibilidad: {disponibilidad ? 'Disponible' : 'No disponible'}</p>
        )
      }
    />
  );
};

export default Horarios;




/*import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormCrud from './formCrud';
import { obtenerHorariosPorPaseador, crearHorario } from '../api/misService';
import { setHorarios } from '../reducers';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Horarios = () => {
  const [formData, setFormData] = useState({
    diaSemana: '',
    horaInicio: '',
    horaFin: '',
    ocupado: false,
  });
  const [paseadorId, setPaseadorId] = useState(''); // ID del paseador seleccionado
  const horarios = useSelector((state) => state.app.horarios);
  const paseadores = useSelector((state) => state.app.paseadores); // Paseadores desde Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redirigir al inicio
  const irAInicio = () => {
    navigate('/');
  };

  // Cargar horarios de un paseador seleccionado
  useEffect(() => {
    const cargarHorarios = async () => {
      try {
        if (paseadores.length > 0) {
          const paseadorSeleccionado = paseadores[0]._id; // Usar el primer paseador como predeterminado
          setPaseadorId(paseadorSeleccionado);
          const response = await obtenerHorariosPorPaseador(paseadorSeleccionado);
          dispatch(setHorarios(response.data.info));
        }
      } catch (error) {
        console.error('Error al obtener horarios:', error);
      }
    };

    cargarHorarios();
  }, [dispatch, paseadores]);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Validar formulario
  const validarFormulario = () => {
    const { diaSemana, horaInicio, horaFin } = formData;
    if (!diaSemana || !horaInicio || !horaFin) {
      alert('Todos los campos son obligatorios');
      return false;
    }
    if (!paseadorId) {
      alert('Debe seleccionar un paseador');
      return false;
    }
    if (horaInicio < 7 || horaInicio > 19 || horaFin < 7 || horaFin > 19) {
      alert('Las horas deben estar entre las 7 y las 19');
      return false;
    }
    if (horaInicio >= horaFin) {
      alert('La hora de inicio debe ser menor que la hora de fin');
      return false;
    }
    return true;
  };

  // Crear un horario
  const handleCrearHorario = async () => {
    if (!validarFormulario()) return;

    try {
      const nuevoHorario = { ...formData, paseador: paseadorId };
      const response = await crearHorario(nuevoHorario);
      alert(`Horario creado con éxito: ${JSON.stringify(response.data)}`);

      // Recargar horarios tras la creación
      const responseHorarios = await obtenerHorariosPorPaseador(paseadorId);
      dispatch(setHorarios(responseHorarios.data.info));

      // Limpiar formulario
      setFormData({ diaSemana: '', horaInicio: '', horaFin: '', ocupado: false });
    } catch (error) {
      console.error('Error al crear horario:', error);
      alert('Hubo un error al crear el horario.');
    }
  };

  return (
    <div>
      <h2>Gestión de Horarios</h2>
      <div className="text-center mb-4">
        <Button variant="secondary" onClick={irAInicio}>
          Volver a Home
        </Button>
      </div>
      <FormCrud
        formData={formData}
        handleChange={handleChange}
        handleCreate={handleCrearHorario}
      />
      <div>
        <h3>Listado de Horarios</h3>
        <ul>
          {horarios.map((horario) => (
            <li key={horario._id}>
              {horario.diaSemana} - Hora inicio: {horario.horaInicio} - Hora fin: {horario.horaFin} -{' '}
              {horario.ocupado ? 'Ocupado' : 'Disponible'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Horarios;*/




/*import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormCrud from './formCrud';
import { obtenerHorariosPorPaseador, crearHorario, validarToken } from '../api/misService';
import { setHorarios } from '../reducers';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Horarios = () => {


  // Obteniendo el estado global de horarios y paseadores desde Redux
const horarios = useSelector((state) => state.app.horarios);
const paseadores = useSelector((state) => state.app.paseadores); // Supongo que los paseadores se seleccionan desde Redux
const dispatch = useDispatch();

const navigate = useNavigate();
   // Uso en la función para redirigir a Home
   const irAInicio = () => {
     navigate('/');
   };

  // Cargar horarios basados en un paseador seleccionado
  useEffect(() => {
    const cargarHorarios = async () => {
      try {
        if (paseadores.length > 0) {
          const paseadorId = paseadores[0]._id; // Ejemplo: usando el primer paseador de la lista
          const response = await obtenerHorariosPorPaseador(paseadorId);
          dispatch(setHorarios(response.data.info));
        }
      } catch (error) {
        console.error('Error al obtener horarios:', error);
      }
    };

    cargarHorarios();
  }, [dispatch, paseadores]);
  
  useEffect(() => {
    const verificarToken = async () => {
      try {
        await validarToken();
        console.log('Token válido');
      } catch (error) {
        console.error('Token no válido:', error);
        navigate('/login'); // Redirigir al login si el token no es válido
      }
    };

    verificarToken();
  }, [navigate]);

  // Función para crear un nuevo horario
  const handleCrearHorario = async (nuevoHorario) => {
    try {
      const response = await crearHorario(nuevoHorario);
      console.log('Horario creado con éxito:', response.data);

      // Recargar la lista de horarios tras la creación
      if (paseadores.length > 0) {
        const paseadorId = paseadores[0]._id;
        const horariosActualizados = await obtenerHorariosPorPaseador(paseadorId);
        dispatch(setHorarios(horariosActualizados.data.info));
      }
    } catch (error) {
      console.error('Error al crear un nuevo horario:', error);
    }
  };

  return (
    <div>
      <h2>Gestión de Horarios</h2>
      <div className="text-center mb-4">
        <Button variant="secondary" onClick={irAInicio}>
          Volver a Home
        </Button>
      </div>
      {/* FormCrud para gestionar creación y edición de horarios */
      /*<FormCrud tipoColeccion="horarios" formData={{}} onSubmit={handleCrearHorario} />
      <div>
        <h3>Listado de Horarios</h3>
        <ul>
          {horarios.map((horario) => (
            <li key={horario._id}>
              {horario.dia} - Hora inicio: {horario.horaInicio} - Hora fin: {horario.horaFin}
            </li>
            
          ))}
        </ul>
      </div>
    </div>
    
  );
};

export default Horarios;*/

