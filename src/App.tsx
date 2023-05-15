import { Container } from 'react-bootstrap';
import './App.scss';
import Footer from './components/footer/footer.lazy';
import Header from './components/header/header.lazy';
import Home from './pages/home/home.lazy';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header />
        <Home />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
