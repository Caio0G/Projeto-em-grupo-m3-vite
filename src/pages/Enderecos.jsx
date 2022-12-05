import "../styles/endereco.css"
import Rodape from "../components/Rodape";

const Enderecos = () => {
 return (
     <>
     <div id="campo">
     <h1>Lista de endereços de cinemas parceiros da Ticket.br</h1>
     </div>

     <div id="pesquisar">
     <h2>Pesquise um cinema em específico :</h2>
     <form>
      <label>
      <input id="digitar" type='text' name="digitar">
     </input>    
     </label>    
     </form>
     <button id="botao">Pesquisar</button>
    </div>

     
    <div className="lista">
    Nome: UCI Kinoplex Norte Shopping<br></br>

    Endereço: Avenida Dom Helder Camara, 5080<br></br>

    Bairro: Cachambi<br></br>

    Telefone: (21) 2461-0050<br></br>

    Retirada de ingresso: Bilheteria / ATM, Impressão ou Aplicativo
   </div>
   <br></br>
  
    <div className="lista">
    Nome: Cine Odeon Net Claro - Centro Cultural LSR<br></br>

    Endereço: Praça Floriano, 7<br></br>

    Bairro: Centro<br></br>

    Telefone: (21) 2240-1093<br></br>

    Retirada de ingresso: Bilheteria / ATM, Impressão ou Aplicativo
    </div>
    <br></br>

    <div className="lista">
    Nome: Kinoplex RioSul<br></br>

    Endereço": Avenida Lauro Sodré 445<br></br>

    Bairro: Botafogo<br></br>

    Telefone: Sem telefone disponivel<br></br>

    Retirada de ingresso: Bilheteria / ATM, Impressão ou Aplicativo
  </div>
  <br></br>
  
    <div className="lista">
    Nome: Kinoplex São Luiz<br></br>

    Endereço: Rua do Catete, 311<br></br>

    Bairro: Catete<br></br>

    Telefone: Sem telefone disponivel<br></br>

    Retirada de ingresso: Bilheteria / ATM, Impressão ou Aplicativo
    </div>
    <br></br>

    <div className="lista">
    Nome: Kinoplex Nova América<br></br>

    Endereço: Avenida Pastor Martin Luther King Junior, 126<br></br>

    Bairro: Del Castilho<br></br>

    Telefone: Sem telefone disponivel<br></br>

    Retirada de ingresso: Bilheteria / ATM, Impressão ou Aplicativo
    </div>
     </>
 )

}

export default Enderecos