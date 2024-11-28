import axios from 'axios';



const BASE_URL = 'http://localhost:3000'; // configuración de conexión para las api´s

// Funciones para la colección de Paseadores
export const crearPaseador = (data) => axios.post(`${BASE_URL}/pas/insPas`, data);
export const obtenerTodosPaseadores = () => axios.get(`${BASE_URL}/pas/getAllPas`);
export const obtenerPaseadorPorId = (id) => axios.get(`${BASE_URL}/pas/getPas/${id}`);
export const actualizarPaseador = (id, data) => axios.post(`${BASE_URL}/pas/updPas`, { id, ...data });
export const eliminarPaseador = (id) => axios.post(`${BASE_URL}/pas/eliPas`, { id });

// Funciones para la colección de Dueños
export const crearDueno = (data) => axios.post(`${BASE_URL}/due/insDue`, data);
export const obtenerTodosDuenos = () => axios.get(`${BASE_URL}/due/getAllDue`);
export const obtenerDuenoPorId = (id) => axios.get(`${BASE_URL}/due/getDue/${id}`);
export const actualizarDueno = (id, data) => axios.post(`${BASE_URL}/due/updDue`, { id, ...data });
export const eliminarDueno = (id) => axios.post(`${BASE_URL}/due/eliDue`, { id });

// Funciones para la colección de Mascotas
export const crearMascota = (data) => axios.post(`${BASE_URL}/mascotas`, data);
export const obtenerTodasMascotas = () => axios.get(`${BASE_URL}/mascotas`);
export const obtenerMascotaPorId = (id) => axios.get(`${BASE_URL}/mascotas/${id}`);
export const actualizarMascota = (id, data) => axios.put(`${BASE_URL}/mascotas/${id}`, data);
export const eliminarMascota = (id) => axios.delete(`${BASE_URL}/mascotas/${id}`);

// Funciones para la colección de Paseos
export const crearPaseo = (data) => axios.post(`${BASE_URL}/pso/insPase`, data);
export const obtenerTodosPaseos = () => axios.get(`${BASE_URL}/pso/getAllPase`);
export const obtenerPaseoPorId = (id) => axios.get(`${BASE_URL}/pso/getPase/${id}`);
export const actualizarPaseo = (id, data) => axios.post(`${BASE_URL}/pso/updPase`, { id, ...data });
export const eliminarPaseo = (id) => axios.post(`${BASE_URL}/pso/eliPase`, { id });

// Funciones para la colección de Usuarios
export const crearUsuario = (data) => axios.post(`${BASE_URL}/usu/insUsr`, data);
export const obtenerTodosUsuarios = () => axios.get(`${BASE_URL}/usu/getAllUsr`);
export const obtenerUsuarioPorId = (id) => axios.get(`${BASE_URL}/usu/getUsr/${id}`);
export const actualizarUsuario = (id, data) => axios.post(`${BASE_URL}/usu/updUsr`, { id, ...data });
export const eliminarUsuario = (id) => axios.post(`${BASE_URL}/usu/eliUsr`, { id });


// Función para login y generación de token
export const loginUsuario = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/usu/login`, data);
    const token = response.data.token;
    if (token) {
      localStorage.setItem('authToken', token);
    }
    return response;
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    throw error;
  }
};
// Función para validar el token
export const validarToken = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    return axios.get(`${BASE_URL}/usu/miEPxVT`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } else {
    throw new Error('Token no disponible');
  }
};


// Llamada para crear un nuevo horario
export const crearHorario = async (data) => {return axios.post(`${BASE_URL}/crear`, data);};

// Llamada para obtener horarios por paseador
export const obtenerHorariosPorPaseador = async (paseadorId) => {return axios.get(`${BASE_URL}/${paseadorId}`);};

// Llamada para verificar disponibilidad
export const verificarDisponibilidad = async (data) => {return axios.post(`${BASE_URL}/disponibilidad`, data);};

export default {
  crearDueno,
  obtenerTodosDuenos,
  obtenerDuenoPorId,
  actualizarDueno,
  eliminarDueno,
  crearMascota,
  obtenerTodasMascotas,
  obtenerMascotaPorId,
  actualizarMascota,
  eliminarMascota,
  crearPaseo,
  obtenerTodosPaseos,
  obtenerPaseoPorId,
  actualizarPaseo,
  eliminarPaseo,
  crearUsuario,
  obtenerTodosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
  loginUsuario,
  validarToken,
  crearHorario,
  obtenerHorariosPorPaseador,
  verificarDisponibilidad
};
