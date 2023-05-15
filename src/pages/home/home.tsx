import React, { FC } from 'react';
import { HomeWrapper } from './home.styled';
import Intro from '../../components/intro/intro.lazy';
import Service from '../../components/service/service.lazy';
import Project from '../../components/project/project.lazy';
import Location from '../../components/location/location.lazy';
import Contact from '../../components/contact/contact.lazy';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
 <HomeWrapper data-testid="Home">
    <Intro/>
    <Service/>
    <Project/>
    <Location/>
    <Contact/>
 </HomeWrapper>
);

export default Home;
