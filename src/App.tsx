import { Container } from "react-bootstrap";
import { HashRouter, Routes } from "react-router-dom";
import "./App.scss";
import { routes } from "./Routes";
import Footer from "./components/footer/footer.lazy";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <HashRouter>
          <Routes children={routes} />
        </HashRouter>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
