// import reactLogo from './assets/react.svg'
import React from 'react'
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import poster1 from "./components/images/adao-negro-poster.jpg";
import poster2 from "./components/images/Halloween-final-poster.jpg";
import poster3 from "./components/images/Pantera-negra-dois.jpg";

function Home() {
  return (
    <>
    <header>
      <h1>(Logo) Ticket.br</h1>
      <h2>Seja bem vindo ao Ticket.br oi</h2>
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
        <section>
          <article>
            Filmes em destaque(exibir três filmes em destaque no efeito carrosel, ao clicar em algum, leva para a página de filmes)
            <button>Ver filmes em cartaz</button>
          </article>
        </section>
      </main>
      <footer>
        (Linkar redes sociais aqui)
      </footer>
    </>
  );
}

export default Home;
