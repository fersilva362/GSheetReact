import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#303030" }}
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand className="" href="/">
          FUTBOL ENTRE AMIGOS
        </Navbar.Brand>
        <Navbar.Toggle className="" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav "
          style={{ justifyContent: "flex-end" }}
        >
          <Nav className="link-light">
            <Nav.Link className="link-light" href="/">
              Match
            </Nav.Link>
            <Nav.Link className="link-light" href="jugadores">
              Players
            </Nav.Link>
            <Nav.Link className="link-light" href="armar-equipo">
              Hay equipo?
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
