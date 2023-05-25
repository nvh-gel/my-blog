import { HashRouter, Routes } from "react-router-dom";
import "./App.scss";
import { routes } from "./Routes";
import Footer from "./components/footer/footer.lazy";

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
