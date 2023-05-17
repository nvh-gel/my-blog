import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import './project.scss';

interface ProjectProps { }

const Project: FC<ProjectProps> = () => {
   const image = 'https://picsum.photos/1920/600';
   const projects = [
      { title: "Ala", date: new Date(), img: "https://picsum.photos/600/400" },
      { title: "project2", date: new Date(), img: "https://picsum.photos/500/300" },
      { title: "test", date: new Date(), img: "https://picsum.photos/620/410" },
      { title: "prod", date: new Date(), img: "https://picsum.photos/550/330" },
      { title: "staging", date: new Date(), img: "https://picsum.photos/640/480" },
   ];

   return (
      <div id='project'>
         <div style={{ backgroundImage: `url(${image})` }}>
            <Container className='project-cover'>
               <h2>Projects</h2>
               <h3>What we have done</h3>
            </Container>
         </div>
         <div className='headline'>
            <p>Latest work</p>
         </div>
         <Container>
            <div className='triangle' />
            <section id="cd-timeline-project" className='cd-container'>
               {projects.map((project) => (
                  <div className='cd-timeline-block' key={project.title}>
                     <div className='cd-timeline-img bounce-in'>
                        <FontAwesomeIcon icon={faCode} />
                     </div>
                     <div className='cd-timeline-content projects bounce-in'>
                        <Image src={project.img} />
                        <div className='project-content'>
                           <h2>{project.title}</h2>
                           <span>{project.date.toDateString()}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </section>
         </Container>
      </div>
   );
}

export default Project;
