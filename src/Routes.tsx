import { Route } from "react-router-dom";
import Gaming from "./pages/gaming/gaming.lazy";
import Home from "./pages/home/home.lazy";
import Programming from "./pages/programming/programming.lazy";
import Reading from "./pages/reading/reading.lazy";

export const routes = [
  <Route path={`${process.env.PUBLIC_URL}/`} Component={Home} />,
  <Route
    path={`${process.env.PUBLIC_URL}/programming`}
    Component={Programming}
  />,
  <Route path={`${process.env.PUBLIC_URL}/reading`} Component={Reading} />,
  <Route path={`${process.env.PUBLIC_URL}/gaming`} Component={Gaming} />,
];
