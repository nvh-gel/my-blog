import { Container } from "react-bootstrap";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import { routes } from "./Routes";
import Footer from "./components/footer/footer.lazy";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <BrowserRouter>
          <Routes children={routes} />
        </BrowserRouter>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
