import { faBookOpen, faCode, faGamepad, faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './intro.scss';

interface IntroProps { }

const Intro: FC<IntroProps> = () => {
   const image = 'https://source.unsplash.com/random/1920x600/?blur';

   return (
      <div id='intro' className="intro" style={{ backgroundImage: `url(${image})` }}>
         <Container>
            <Row className='intro-button'>
               <Col><FontAwesomeIcon icon={faRoute} className='intro-icon' /><br />Travel</Col>
               <Col><FontAwesomeIcon icon={faBookOpen} className='intro-icon' /><br />Reading</Col>
               <Col><FontAwesomeIcon icon={faCode} className='intro-icon' /><br />Programing</Col>
               <Col><FontAwesomeIcon icon={faGamepad} className='intro-icon' /><br />Gaming</Col>
            </Row>
         </Container>
      </div >
   );
}

export default Intro;
