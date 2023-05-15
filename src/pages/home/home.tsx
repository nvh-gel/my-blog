import { FC } from 'react';
import Contact from '../../components/contact/contact.lazy';
import Intro from '../../components/intro/intro.lazy';
import Location from '../../components/location/location.lazy';
import Project from '../../components/project/project.lazy';
import Service from '../../components/service/service.lazy';

interface HomeProps { }

const Home: FC<HomeProps> = () => (
   <div>
      <Intro />
      <Service />
      <Project />
      <Location />
      <Contact />
   </div>
);

export default Home;
