// import reactLogo from './assets/react.svg'
import React from 'react'
import "./App.css";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from './components/images/logo-ticket.svg';
import Lupa from './components/images/Lupa.png';
import Adan from './components/images/adao-negro-poster.jpg';
import Halloween from './components/images/halloween-final-poster.jpg';
import Panther from './components/images/pantera-negra-dois.jpg';


function App() {
  return (
    <>
    <header>
      <h1> <img id='logo' src={Logo}/> Ticket.br</h1>
      <h2>Seja bem vindo ao Ticket.br</h2>
        <input id='campo' type="text" /> <img id='lupa' src={Lupa}/> {/*Logo de uma lupa para redirecionar para o route filmes*/}
      </header>
      <nav id="menu">
        <ul>
          <li>
            |Filmes| {/*Linkar para a rota filmes*/}
          </li>
          <li>
            |Bomboniere| {/*Linkar para a rota Bomboniere*/}
          </li>
          <li>
          |Endereços| {/*Linkar para a rota endereços*/}
          </li>
          <li>
            |Login {/*Linkar para a rota login*/}
          </li>
        </ul>
      </nav>
      <main>
        <h3>Filmes em destaque</h3>
        <img class='poster' src={Adan}/> {/*Adicionar um efeito carrosel aqui, com um texto acima das imagens escrito 'Filmes em destaque e ao clicar em qualquer um dos três, levar a rota filmes*/}
        <img class='poster' src={Halloween}/>
        <img class='poster' src={Panther}/>
        <button id='botao'>Ver filmes em cartaz</button> {/*Ideia e que ao clicar no botão, levar para a rota filmes em cartaz*/}
      </main>
      <footer>
      <div className="footer">
            
          

            <div className="colunas">
 
           <div className="coluna1">
            <ul> <h4>Ticket.br</h4>
            <li> <a href="">Conheça Ticket.br</a></li>
            <li> <a href="">Espaço vip</a></li>
            <li><a href="">Comercial</a></li> 
            <li><a href="">Cartão presente</a></li> 
            </ul>
           </div> 
 
           <div className="coluna2">
            <ul> <h4>Bomboniere</h4>
            <li> <a href="">Bomboniere</a></li>
            </ul>
           </div> 
 
           <div className="coluna3">
            <ul> <h4>Clube da pipoca</h4>
            <li> <a href="">Acesse sua conta</a></li>
            <li> <a href="">Cadastre-se</a></li>
            <li><a href="">Como funciona</a></li> 
            <li><a href="">Destaques</a></li> 
            </ul>
           </div> 
 
           <div className="coluna4">
            <ul> <h4>Programação</h4>
            <li> <a href="">Em Cartaz</a></li>
            <li> <a href="">Em Breve</a></li>
            </ul>
           </div> 
 
           <div className="coluna5">
            <ul> <h4>Veja mais</h4>
            <li> <a href="">Anuncie</a></li>
            <li> <a href="">Fale conosco</a></li>
            <li> <a href="">Portal de privacidade</a></li>
            <li> <a href="">Trabalhe conosco</a></li>
            <li> <a href="">Canal de denúncias</a></li>
            <li> <a href="">Formação de talentos</a></li>
            </ul>
           </div> 
         
           </div>
           
 
 
         </div>
     )
        {/*Linkar redes sociais aqui: Instagram,Twitter e Facebook*/} {/*Linkar também para as rotas no Footer*/}
        Ticket.br todos os direitos reservados && 2022
      </footer>
    </>
  );
}

export default App;
