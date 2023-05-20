import { Container } from "react-bootstrap";
import "./App.scss";
import Footer from "./components/footer/footer.lazy";
import Header from "./components/header/header.lazy";
import { homeMenu } from "./menu-items";
import Home from "./pages/home/home.lazy";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header items={homeMenu} />
        <Home />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
