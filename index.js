
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store'; // Importa tu store configurada
import App from './App'; // Importa tu componente principal
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap para estilos
import './index.css'; // Importa tus estilos globales opcionales

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    
      <App />
    
  </Provider>
);


