import { FC } from "react";
import Contact from "../../components/contact/contact.lazy";
import Header from "../../components/header/header.lazy";
import Intro from "../../components/intro/intro.lazy";
import Location from "../../components/location/location.lazy";
import Project from "../../components/project/project.lazy";
import Service from "../../components/service/service.lazy";
import { homeMenu } from "../../configs/menu-items";
import "./home.scss";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div>
    <Header items={homeMenu} />
    <Intro />
    <Service />
    <Project />
    <Location />
    <Contact />
  </div>
);

export default Home;
