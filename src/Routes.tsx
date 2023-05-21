import { Route } from "react-router-dom";
import Gaming from "./pages/gaming/gaming.lazy";
import Home from "./pages/home/home.lazy";
import Programming from "./pages/programming/programming.lazy";
import Reading from "./pages/reading/reading.lazy";

export const routes = [
  <Route key="/" path={`/`} Component={Home} />,
  <Route key="/programming" path={`/programming`} Component={Programming} />,
  <Route key="/reading" path={`/reading`} Component={Reading} />,
  <Route key="/gaming" path={`/gaming`} Component={Gaming} />,
];
