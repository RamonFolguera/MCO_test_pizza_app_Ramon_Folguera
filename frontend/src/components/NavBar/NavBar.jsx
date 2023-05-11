import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">MCO Pizza App</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="./pizza-menu">Menu</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="./login">Log in</Nav.Link>
                <Nav.Link href="./register">Register</Nav.Link>
               
              </Nav>
            </Navbar.Collapse> */}
          </Container>
        </Navbar>
      );
}

