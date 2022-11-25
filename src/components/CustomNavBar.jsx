import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Hola = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Luxury Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Relojes</Nav.Link>
              <Nav.Link href="#link">Fragancias</Nav.Link>
              <Nav.Link href="#link">Gafas</Nav.Link>
              <Nav.Link href="#link">Zapatos</Nav.Link>
             
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#home">Registrarse</Nav.Link>
              <Nav.Link href="#link">Sign In</Nav.Link>
              <Nav.Link href="#link"><AiOutlineShoppingCart /> </Nav.Link>
              
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
 

export default Hola;

