import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paseadores: [],
  usuario: [],
  horarios: [],
  dueno: [],
  mascotas: [],
  paseo: [],
  datosFormulario: [],
  id: [],
  datosUsuario: [],

};

const reducers = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPaseadores: (state, action) => {
      state.paseadores = action.payload;
    },
    setUsuario: (state, action) => {
      state.usuario = action.payload;
    },
    setHorarios: (state, action) => {
      state.horarios = action.payload;
    },
  
    setMascotas: (state, action) => {
    state.mascotas = action.payload;
    },
    
    setDueno: (state, action) => {
    state.dueno = action.payload;
  
    },
    setPaseo: (state, action) => {
    state.paseo = action.payload;
    },
    setDatosFormulario: (state, action) => {
    state.datosFormulario = action.payload;
    },
    setId: (state, action) => {
    state.id = action.payload;
    },
    setDatosUsuario: (state, action) => {
    state.datosUsuario = action.payload;
    },
  },
});

export const { setPaseadores, setUsuario, setHorarios,setMascotas, setPaseo, setDueno, setDatosFormulario, setId, setDatosUsuario } = reducers.actions;
export default reducers.reducer;



/*import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paseadores: [],
  usuario: [],
  horarios: [],
  dueno: [],
  mascotas: [],
  paseo: [],
  datosFormulario: [],
  id: [],
  datosUsuario: [],
};

const reducers = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPaseadores: (state, action) => {
      state.paseadores = action.payload;
    },
    setUsuario: (state, action) => {
      state.usuario = action.payload;
    },
    setHorarios: (state, action) => {
      state.horarios = action.payload;
    },
    setMascotas: (state, action) => {
      state.mascotas = action.payload;
    },
    setDueno: (state, action) => {
      state.dueno = action.payload;
    },
    setPaseo: (state, action) => {
      state.paseo = action.payload;
    },
    setDatosFormulario: (state, action) => {
      state.datosFormulario = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setDatosUsuario: (state, action) => {
      state.datosUsuario = action.payload;
    },

    addPaseador: (state, action) => {
      state.paseadores.push(action.payload);
    },
  },
});

export const { 
  setPaseadores, 
  setUsuario, 
  setHorarios, 
  setMascotas, 
  setDueno, 
  setPaseo, 
  setDatosFormulario, 
  setId, 
  setDatosUsuario, 
  addPaseador 
} = reducers.actions;

export default reducers.reducer;*/


/*import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paseadores: [],
  usuario: [],
  horarios: [],
  dueno: [],
  mascotas: [],
  paseo: [],
  datosFormulario: [],
  id: [],
  datosUsuario: [],

};

const reducers = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPaseadores: (state, action) => {
      state.paseadores = action.payload;
    },
    setUsuario: (state, action) => {
      state.usuario = action.payload;
    },
    setHorarios: (state, action) => {
      state.horarios = action.payload;
    },
  
    setMascotas: (state, action) => {
    state.mascotas = action.payload;
    },
    
    setDueno: (state, action) => {
    state.dueno = action.payload;
  
    },
    setPaseo: (state, action) => {
    state.paseo = action.payload;
    },
    setDatosFormulario: (state, action) => {
    state.datosFormulario = action.payload;
    },
    setId: (state, action) => {
    state.id = action.payload;
    },
    setDatosUsuario: (state, action) => {
    state.datosUsuario = action.payload;
    },
  },
});

export const { setPaseadores, setUsuario, setHorarios,setMascotas, setPaseo, setDueno, setDatosFormulario, setId, setDatosUsuario } = reducers.actions;
export default reducers.reducer;*/
