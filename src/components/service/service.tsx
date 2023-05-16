import { FC } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import './service.scss';

interface ServiceProps { }

const Service: FC<ServiceProps> = () => (
   <div>
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
                  <section className='cd-timeline cd-container'>
                     <div className='cd-timeline-block'>
                        <div className='cd-timeline-img bounce-in'>
                           <Image src='first-icon.png' />
                        </div>
                        <div className='cd-timeline-content bounce-in'>
                           <h2>Java developer</h2>
                           <p>Timeline is free responsive template by templatemo.</p>
                        </div>
                     </div>
                     <div className='cd-timeline-block'>
                        <div className='cd-timeline-img bounce-in'>
                           <Image src='first-icon.png' />
                        </div>
                        <div className='cd-timeline-content bounce-in'>
                           <h2>Java developer</h2>
                           <p>Timeline is free responsive template by templatemo.</p>
                        </div>
                     </div>
                     <div className='cd-timeline-block'>
                        <div className='cd-timeline-img bounce-in'>
                           <Image src='first-icon.png' />
                        </div>
                        <div className='cd-timeline-content bounce-in'>
                           <h2>Java developer</h2>
                           <p>Timeline is free responsive template by templatemo.</p>
                        </div>
                     </div>
                     <div className='cd-timeline-block'>
                        <div className='cd-timeline-img bounce-in'>
                           <Image src='first-icon.png' />
                        </div>
                        <div className='cd-timeline-content bounce-in'>
                           <h2>Java developer</h2>
                           <p>Timeline is free responsive template by templatemo.</p>
                        </div>
                     </div>
                  </section>
               </Col>
            </Row>
         </Container>
      </div>
   </div>
);

export default Service;
