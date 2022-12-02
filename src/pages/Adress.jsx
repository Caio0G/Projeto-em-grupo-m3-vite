function endereco(){
     return (
     <>
     <header>
          <h1>(Logo)Ticket.br</h1> {/*Falta colocar a logo*/}
          <h2>Endereços</h2>
     </header>
     <nav id="menu">
        <ul>
          <li>
            |Home|
          </li>
          <li>
            |Filmes|
          </li>
          <li>
            |Bomboniere|
          </li>
          <li>
            |Login|
          </li>
        </ul>
      </nav>
      <main>
         Endereços de cinema
         {/*Fazer manualmente baseado nos cinemas que estão no JSON ou*/}
        <input type="text"/>  <button>Pesquisar</button> {/*Ideia era digitar algum cinema e pegar no JSON, mas muito complexo para fazer funcionar acredito eu*/}
      </main>
     Pesquise um cinema ou olhe a nossa lista

      Cinema 1
      Cinema 2
      Cinema 3
      Cinema 4
      Cinema 5
      {/*Exibir o JSON, especificamente o de endereços de cinema*/}
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
        {/*Linkar redes sociais aqui: Instagram,Twitter e Facebook*/} {/*Linkar também para as rotas no Footer*/}
        Ticket.br todos os direitos reservados && 2022
      </footer>
     </>
     )
}

export default endereco