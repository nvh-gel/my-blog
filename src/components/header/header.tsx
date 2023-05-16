import { FC } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import './header.scss';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
   return (
      <div className='header'>
         <Container>
            <Navbar collapseOnSelect expand='lg' fixed='top' className='navbar'>
               <Navbar.Brand className='logo' href='/'><span>E</span>den</Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className='justify-content-end'>
                  <Nav className='menu'>
                     <Nav.Link className='menu-item' href='/#home'>HOME</Nav.Link>
                     <Nav.Link className='menu-item' href='/#service'>SERVICES</Nav.Link>
                     <Nav.Link className='menu-item' href='/#project'>PROJECTS</Nav.Link>
                     <Nav.Link className='menu-item' href='/#location'>LOCATION</Nav.Link>
                     <Nav.Link className='menu-item' href='/#about'>CONTACT</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </Container>
      </div>
   );
}

export default Header;
