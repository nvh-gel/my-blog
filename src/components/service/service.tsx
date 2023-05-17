import { faHtml5, faJava } from '@fortawesome/free-brands-svg-icons';
import { faBinoculars, faGears } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './service.scss';

interface ServiceProps { }

const Service: FC<ServiceProps> = () => {

   const items = [{
      title: "Java developer",
      content: "Bob: I can i i everything elseAlice: balls have zero to me to me to me to me to me to me to me to me to Bob: you i everything elseAlice: balls have a ball to me to me to me to me to me to me to me to meThe reality is somewhat more prosaic.",
      icon: faJava,
   }, {
      title: "Frontend developer",
      content: "To fit shapes together is to organize, to build, to make deals, to fix, to understand, to fold sheets.",
      icon: faHtml5,
   }, {
      title: "Algorithm enjoyer",
      content: "The virtual assistant is now able to pull up music for a wide range of activities - like music to focus to, music to nap to, to run to, to meditate to, to cook to, and much more - just by asking.",
      icon: faGears,
   }, {
      title: "New techonoly enthusiasm",
      content: "I came to New York to be with them, to see them, to talk to them, to interview them, to study with them, to become their friends, to see their exhibitions, she remembers.",
      icon: faBinoculars,
   }];

   return (
      <div id='service'>
         <div className='headline'>
            <p>WHAT WE CAN DO</p>
         </div>
         <div className='service'>
            <Container>
               <Row>
                  <Col>
                     <div className='triangle'></div>
                  </Col>
               </Row>
               <Row>
                  <Col>
                     <section id='cd-timeline-service' className='cd-container'>
                        {items.map(item =>
                           <div className='cd-timeline-block' key={item.title}>
                              <div className='cd-timeline-img bounce-in'>
                                 <FontAwesomeIcon icon={item.icon} />
                              </div>
                              <div className='cd-timeline-content service-box-content bounce-in'>
                                 <h2>{item.title}</h2>
                                 <p>{item.content}</p>
                              </div>
                           </div>
                        )}
                     </section>
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   );
}
export default Service;
