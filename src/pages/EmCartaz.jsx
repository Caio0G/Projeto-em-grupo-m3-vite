import Rodape from "../components/Rodape";
import "../styles/emcartaz.css";

const EmCartaz = () => {
  return (
    <>
      <div id="frase">
         <h2> Seja bem vindo ao Ticket.br ! </h2> 
         </div>

      <div className="area-principal">
        <h1>Filmes em cartaz no momento</h1>

        <hr />

        <div id="cartaz">
          <div>
            <h3>Adão Negro</h3>
            <div className="zoom">
              <img src="https://www.barrashopping.com.br/sites/testes/files/cinema/ad__o-negro_1.jpg"></img>
            </div>
          </div>

          <div>
            <h3>Halloween Ends </h3>
            <div className="zoom">
              {" "}
              <img src="https://www.atoupeira.com.br/wp-content/uploads/2022/10/halloween-ends-poster-final-critica.jpg"></img>
            </div>
          </div>

          <div>
            <h3>Lilo, Lilo, Crocodilo</h3>
            <div className="zoom">
              <img src="https://partageshoppingmossoro.com.br/media/lilo-lilo.jpg"></img>
            </div>
          </div>
        </div>

        <div id="cartaz">
          <div>
            <h3>Pantera Negra 2</h3>

            <div className="zoom">
              {" "}
              <img src="https://www.kinoplex.com.br/filmes/images/cartaz/262x388/pantera-negra-wakanda-para-sempre.jpg?"></img>
            </div>
          </div>

          <div>
            <h3>A Luz do Demônio</h3>

            <div className="zoom">
              {" "}
              <img src="https://cloud.estacaonerd.com/wp-content/uploads/2022/07/11194404/A-LUZ.jpg"></img>
            </div>
          </div>

          <div>
            <h3>A Mulher Rei</h3>

            <div className="zoom">
              {" "}
              <img src="https://www.atoupeira.com.br/wp-content/uploads/2022/09/a-mulher-rei-poster-nacional-0609-768x960.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmCartaz;
