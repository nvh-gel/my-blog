import { HashRouter, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/footer.lazy";
import { routes } from "./configs/routes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes children={routes} />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
