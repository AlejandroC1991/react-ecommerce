import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";


const Hola = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to='/' style={{textDecoration: "none", color: "black"}}> Luxury Shop</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to='/category/1' style={{textDecoration: "none", color: "black"}}>Relojes</Link></Nav.Link>
              <Nav.Link ><Link to='/category/2' style={{textDecoration: "none", color: "black"}}>Fragancias</Link></Nav.Link>
              <Nav.Link ><Link to='/category/3' style={{textDecoration: "none", color: "black"}}>Gafas</Link></Nav.Link>
             
             
            </Nav>
            <Nav className="me-auto">
              <Nav.Link ><Link to='/' style={{textDecoration: "none", color: "black"}}>Registrarse</Link></Nav.Link>
              <Nav.Link ><Link to='/' style={{textDecoration: "none", color: "black"}}>Sign In</Link></Nav.Link>
              <Nav.Link ><Link to='/cart' style={{textDecoration: "none", color: "black"}}><CartWidget /></Link> </Nav.Link>
              
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
 

export default Hola;

