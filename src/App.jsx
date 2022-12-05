// import reactLogo from './assets/react.svg'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaEdicao from "./pages/Tela-edicao";
import Login from "./pages/Login";
import Cabecalho from "./components/Cabecalho";
import Enderecos from "./pages/Enderecos";

// import "./App.css";
import Filmes from "./pages/Filmes";
import EmCartaz from "./pages/EmCartaz";
import Rodape from "./components/Rodape";

function App() {
  return (
    <>
      <Router>
        <Cabecalho />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/tela-edicao" element={<TelaEdicao />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/" element={<EmCartaz />} />
          <Route path="/enderecos" element={<Enderecos/>} />
        </Routes>
        <Rodape />
      </Router>
    </>
  );
}

export default App;
