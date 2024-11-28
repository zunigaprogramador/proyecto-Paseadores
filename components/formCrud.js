
import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

const FormCrud = ({
  formData = {},
  handleChange,
  handleCreate,
  handleReadAll,
  handleReadById,
  handleUpdate,
  handleDelete,
  id,
  setId,
  validate, // Nueva función para validaciones
}) => {
  const navigate = useNavigate(); // Inicializar useNavigate

  // Función para redirigir a Home
  const irAInicio = () => {
    navigate('/');
  };

  // Manejador para el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate) {
      const isValid = validate(event); // Validar si la forma es correcta
      if (isValid) handleCreate(); // Crear solo si la validación pasa
    } else {
      handleCreate(); // Crear directamente si no hay validación
    }
  };

  return (
    <Container className="p-4 mt-4 border rounded shadow-sm bg-light">
      <div className="text-center mb-4">
        <Button variant="secondary" onClick={irAInicio}>
          Volver a Home
        </Button>
      </div>
      <h4 className="mb-4">Diligencia Formulario</h4>
      <Form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <Form.Group as={Row} className="mb-3" key={key}>
            <Form.Label column sm={3}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name={key}
                placeholder={`Ingrese ${key}`}
                value={formData[key] || ''}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
        ))}
        <div className="text-center">
          <Button type="submit" variant="success" className="me-2">Crear</Button>
          <Button variant="info" className="me-2" onClick={handleReadAll}>Consultar Todos</Button>
          <Form.Control
            type="text"
            placeholder="Ingrese ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="d-inline w-auto me-2"
          />
          <Button variant="primary" className="me-2" onClick={handleReadById}>Consultar por ID</Button>
          <Button variant="warning" className="me-2" onClick={handleUpdate}>Modificar</Button>
          <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormCrud;



/*import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 



const FormCrud = ({
  formData = {},
  handleChange,
  handleCreate,
  handleReadAll,
  handleReadById,
  handleUpdate,
  handleDelete,
  id,
  setId,
}) => {
  const navigate = useNavigate(); // Inicializar useNavigate

// Función para redirigir a Home
const irAInicio = () => {
  navigate('/');
};
  return (
    
    <Container className="p-4 mt-4 border rounded shadow-sm bg-light">
      <div className="text-center mb-4">
        <Button variant="secondary" onClick={irAInicio}>
          Volver a Home
        </Button>
      </div>
      <h4 className="mb-4">Diligencia Formulario</h4>
      <Form>
        {Object.keys(formData).map((key) => (
          <Form.Group as={Row} className="mb-3" key={key}>
            <Form.Label column sm={3}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name={key}
                placeholder={`Ingrese ${key}`}
                value={formData[key] || ''}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
        ))}
        <div className="text-center">
          <Button variant="success" className="me-2" onClick={handleCreate}>Crear</Button>
          <Button variant="info" className="me-2" onClick={handleReadAll}>Consultar Todos</Button>
          <Form.Control
            type="text"
            placeholder="Ingrese ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="d-inline w-auto me-2"
          />
          <Button variant="primary" className="me-2" onClick={handleReadById}>Consultar por ID</Button>
          <Button variant="warning" className="me-2" onClick={handleUpdate}>Modificar</Button>
          <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormCrud;*/
