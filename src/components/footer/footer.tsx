import { faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Row from 'react-bootstrap/esm/Row';
import './footer.scss';

interface FooterProps { }

const Footer: FC<FooterProps> = () => {
   return (
      <div className='footer'>
         <Container>
            <Row>
               <Col><p className='copyright'>Copyright © 2023. Developed by Eden</p></Col>
               <Col><Button className='button-top'>BACK TO TOP</Button></Col>
               <Col>
                  <Nav className='justify-content-end socials'>
                     <Nav.Link className='social-button'><FontAwesomeIcon icon={faFacebookSquare} /></Nav.Link>
                     <Nav.Link className='social-button'><FontAwesomeIcon icon={faTwitterSquare} /></Nav.Link>
                     <Nav.Link className='social-button'><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
                     <Nav.Link className='social-button'><FontAwesomeIcon icon={faGithubSquare} /></Nav.Link>
                  </Nav>
               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default Footer;
