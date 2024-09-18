import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/" as={Link}>Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/administrar" as={NavLink} >Administrar</Nav.Link>
            <Nav.Link to="/agregar" as={NavLink}>Agregar Recetas</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
     
     

      
    </>
  );
}

export default Header;