import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#303030", height: "70px" }}
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand style={{ fontSize: "25px" }} className="" href="/">
          FUTBOL ENTRE AMIGOS
        </Navbar.Brand>
        <Navbar.Toggle className="" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav "
          style={{
            justifyContent: "flex-end",
          }}
        >
          <Nav
            className="link-light"
            style={{
              backgroundColor: "#303030",
              width: "fit-content",
              paddingInline: "30px",
            }}
          >
            <Nav.Link className="link-light" href="/">
              Match
            </Nav.Link>
            <Nav.Link className="link-light" href="jugadores">
              Players
            </Nav.Link>
            <Nav.Link className="link-light" href="armar-equipo">
              Squad builder
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
