// import reactLogo from './assets/react.svg'
import "./App.css";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adress from "./pages/Adress";
import poster1 from "./components/images/adao-negro-poster.jpg";
import poster2 from "./components/images/Halloween-final-poster.jpg"
import poster3 from "./components/images/Pantera-negra-dois.jpg"

const posterr =[poster1, poster2, poster3]

function App() {
  return (
    <>
    <header>
      <h1>(Logo) Ticket.br</h1>
      <h2>Seja bem vindo ao Ticket.br</h2>
        <input type="text" /> imglupa
        <h3>(Logo de uma lupa para redirecionar para a página)</h3>
      </header>
      <nav id="menu">
        <ul>
          <li>
            Filmes|
          </li>
          <li>
            Bomboniere|
          </li>
          <li>
          Endereços|
          </li>
          <li>
            Login
          </li>
        </ul>
      </nav>
      <main>
          <div>
            <motion.div className="carousel">
            <motion.div className="inner">
              
          {posterr.map(image => (
            <motion.div className="item" key={posterr}>
            <img src={posterr} alt="Texto alt"/>
            </motion.div>
          ))}
          </motion.div>
          </div>
            Filmes em destaque(exibir três filmes em destaque no efeito carrosel, ao clicar em algum, leva para a página de filmes)
            <button>Ver filmes em cartaz</button>
          </div>
      </main>
      <footer>
        (Linkar redes sociais aqui) Filmes|Bomboniere|Endereços|Login|
        Ticket.br todos os direitos reservados 2022
      </footer>
    </>
  );
}

export default App;
