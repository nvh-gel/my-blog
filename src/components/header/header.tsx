import { FC } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import "./header.scss";

export interface HeaderProps {
  items: MenuProps[];
}

export interface MenuProps {
  text: string;
  nav: string;
}

const Header: FC<HeaderProps> = ({ items }) => {
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
              {items.map((item) => (
                <Nav.Link
                  className="menu-item"
                  onClick={() => handleScrollTo(item.nav)}
                >
                  {item.text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
