import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Bienvenido a la App de Paseadores de Perros</h1>
      <p className="text-center mb-5">
        Administra dueños, mascotas, paseadores y más. Selecciona una sección para comenzar.
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Tarjeta: Paseadores */}
        <div className="col">
          <div className="card text-white bg-warning h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Paseadores</h5>
              <p className="card-text">Administra los paseadores disponibles.</p>
              <Link to="/paseadores" className="btn btn-light">
                Ir a Paseadores
              </Link>
            </div>
          </div>
        </div>
        {/* Tarjeta: Dueños */}
        <div className="col">
          <div className="card text-white bg-primary h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Dueños</h5>
              <p className="card-text">Gestiona la información de los dueños.</p>
              <Link to="/dueno" className="btn btn-light">
                Ir a Dueños
              </Link>
            </div>
          </div>
        </div>
        {/* Tarjeta: Mascotas */}
        <div className="col">
          <div className="card text-white bg-success h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Mascotas</h5>
              <p className="card-text">Registra y administra las mascotas.</p>
              <Link to="/mascotas" className="btn btn-light">
                Ir a Mascotas
              </Link>
            </div>
          </div>
        </div>
        {/* Tarjeta: Usuarios */}
        <div className="col">
          <div className="card text-white bg-secondary h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Usuarios</h5>
              <p className="card-text">Administra los usuarios del sistema.</p>
              <Link to="/usuarios" className="btn btn-light">
                Ir a Usuarios
              </Link>
            </div>
          </div>
        </div>
        {/* Tarjeta: Paseos */}
        <div className="col">
          <div className="card text-white bg-danger h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Paseos</h5>
              <p className="card-text">Organiza y programa paseos.</p>
              <Link to="/paseo" className="btn btn-light">
                Ir a Paseos
              </Link>
            </div>
          </div>
        </div>
        {/* Tarjeta: Horarios */}
        <div className="col">
          <div className="card text-white bg-info h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Horarios</h5>
              <p className="card-text">Gestiona la disponibilidad de los paseadores.</p>
              <Link to="/horarios" className="btn btn-light">
                Ir a Horarios
              </Link>
            </div>
          </div>
        </div>
        {/* Tarjeta: FormCrud */}
        <div className="col">
          <div className="card text-dark bg-light h-100">
            <div className="card-body text-center">
              <h5 className="card-title">FormCrud</h5>
              <p className="card-text">Gestiona cualquier colección del sistema.</p>
              <Link to="/formCrud" className="btn btn-dark">
                Ir a FormCrud
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



/*import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la App de Paseadores de Perros</h1>
      <nav>
        <Link to="/PaseadoresList">PaseadoresList</Link>
        <Link to="/paseadores">Paseadores</Link>
        <Link to="/dueno">Dueños</Link>
        <Link to="/mascotas">Mascotas</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/paseo">Paseo</Link>
        <Link to="/horarios">Horarios</Link>
        <Link to="/formCrud">FormCrud</Link>
      </nav>
    </div>
  );
};

export default Home;*/