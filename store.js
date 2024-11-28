import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    app: reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), // Agregar thunk como middleware
});

export default store;