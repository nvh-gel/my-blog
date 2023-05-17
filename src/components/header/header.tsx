import { FC } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import "./header.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  function handleScrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="header" id="top">
      <Container>
        <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
          <Navbar.Brand className="logo" href={process.env.PUBLIC_URL}>
            <span>E</span>den
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="menu">
              <Nav.Link
                className="menu-item"
                onClick={() => handleScrollTo("top")}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                className="menu-item"
                onClick={() => handleScrollTo("service")}
              >
                SERVICES
              </Nav.Link>
              <Nav.Link
                className="menu-item"
                onClick={() => handleScrollTo("project")}
              >
                PROJECTS
              </Nav.Link>
              <Nav.Link
                className="menu-item"
                onClick={() => handleScrollTo("location")}
              >
                LOCATION
              </Nav.Link>
              <Nav.Link
                className="menu-item"
                onClick={() => handleScrollTo("contact")}
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
