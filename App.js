import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
// Importación de componentes
import Home from './components/Home'; // Componente de página de inicio
import Paseadores from './components/paseadores';
import Dueno from './components/dueno';
import Mascotas from './components/mascotas';
import Usuarios from './components/usuarios';
import Paseo from './components/paseo';
import Horarios from './components/horarios';
import FormCrud from './components/formCrud';

function App() {
  return (
    <Router>
   
      <Routes>
        {/* Ruta por defecto para Home */}
        <Route path="/" element={<Home />} />
        <Route path="/paseadores" element={<Paseadores />} />
        <Route path="/dueno" element={<Dueno />} />
        <Route path="/mascotas" element={<Mascotas />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/paseo" element={<Paseo />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/formCrud" element={<FormCrud />} />
      </Routes>
    </Router>
  );
}

export default App;

/*<nav>
<NavLink to="/" exact activeClassName="active">Inicio</NavLink>
<NavLink to="/paseadores" activeClassName="active">Paseadores</NavLink>
<NavLink to="/dueno" activeClassName="active">Dueños</NavLink>
<NavLink to="/mascotas" activeClassName="active">Mascotas</NavLink>
<NavLink to="/usuarios" activeClassName="active">Usuarios</NavLink>
<NavLink to="/paseo" activeClassName="active">Paseo</NavLink>
<NavLink to="/horarios" activeClassName="active">Horarios</NavLink>
<NavLink to="/formCrud" activeClassName="active">FormCrud</NavLink>
</nav>*/

