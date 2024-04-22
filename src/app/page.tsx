import Image from "next/image";


export default function Home() {


  return (
    <div>

{/* CABEÇALHO DA PAGINA  */}
      <header className="w-full bg-custom-blue py-4 px-24 flex items-center justify-between">
        <div>
          <a href="/">
            <Image src="/newLogo.png" alt="Logo União" width={120} height={40} />
          </a>
        </div>
        <nav className="flex">
          <a href="#elenco" className="text-white mr-4 icon-link">Elenco</a>
          <a href="#diretoria" className="text-white mr-4 icon-link">Diretoria</a>
          <a href="#galeria" className="text-white mr-4 icon-link">Galeria</a>
          <a href="#news" className="text-white mr-4 icon-link">Infos</a>
          <a href="#patrocinio" className="text-white mr-4 icon-link">Patrocinadores</a>
          <a href="/noticias" className="text-white mr-4 icon-link">Noticias</a>
          <a href="#contato" className="text-white mr-4 icon-link">Contato</a>
        </nav>
      </header>
      <div>
  
</div>

 {/* HISTORIA  */}
      <main className="w-full items-center justify-between p-30"> <br></br><br></br>
          <section id="nossa-historia" className="max-w-4xl mx-auto mb-28 flex">
          <div className="w-1/2 mr-8">
              <h2 className="text-3xl font-bold mb-4 text-custom-gold">Nossa História</h2>
              <p className="text-lg text-custom-blue mb-8">
                  O União Brasilândia, o famoso UVB surgiu em 10/04/2013, em uma pequena comunidade apaixonada pelo esporte. Tudo começou com um grupo de amigos que compartilhavam o amor pelo futebol e sonhavam em formar uma equipe para representar seu bairro. <br /><br />
                  O espírito de camaradagem e família tornaram-se as marcas registradas do time, inspirando não apenas os jogadores, mas toda a comunidade.<br /><br />
                  Hoje, o União Brasilândia continua a escrever sua história, celebrando suas raízes humildes e olhando para o futuro com esperança e determinação, eles continuam a defender suas cores em cada partida que disputam.<br />
              </p>
                  </div>
            <div className="w-1/2 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center"> {/* Adicionado flex e flex-col */}
                    <Image src="/elencoAntigo.jpeg" alt="Primeiro Elenco do União" width={800} height={300}/>
                    <p className="text-lg text-custom-blue mt-4">Primeiro Elenco do União</p>
                </div>
            </div>
</section>
<section id="titulos" className="w-full md:w-1/2 mx-auto mb-8 flex flex-col items-center justify-center bg-custom-white"> 
    <div className="flex items-center mb-4 mt-10">
        <h2 className="text-3xl font-bold mr-2 text-custom-gold">TÍTULOS CONQUISTADOS</h2> {/* Título */}
        <img width="40" height="40" src="https://img.icons8.com/office/16/trophy--v1.png" alt="trophy--v1"/> {/* Ícone */}
    </div>
    <ul className="text-lg text-custom-blue">
      <li>Festival 2023</li>
        <li>Festival bola show 2023</li>
        <li>Festival dia das Crianças 2021</li>
        <li>Festival dia do trabalho 2019</li>
        <li>Festival Conciencia Negra 2018</li>
        <li>Festival Amigos do Porto 2018</li>
        <li>Festival 2017</li>
        <li>Festival 7 de Setembro 2017</li>
        <li>Festival dia das crianças 2016</li>
    </ul>
</section>





{/* ELENCO */}
<section id="elenco" className="w-full mx-auto mb-12 bg-custom-gold flex flex-col items-center justify-center pb-12">
  <div className="w-full text-center mb-5">
    <h3 className="text-3xl font-bold mb-2 text-custom-blue mt-5">ELENCO ATUAL</h3>
    <p className="text-custom-blue">Veja nossos jogadores - EM DESENVOLVIMENTO</p>
  </div>
  <div className="w-full grid grid-cols-7">
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div> 
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div> 
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div> 
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div> 
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-3" />
    </div>
    
  </div> <br></br><br></br><br></br><br></br><br></br>
</section>

{/* DIRETORIA */}
<section id="diretoria" className="max-w-full mx-auto bg-custom-white mb-22 flex flex-col items-center justify-center">
  <div className="w-full text-center mb-12  mt-10">
    <h2 className="text-3xl font-bold mb-5 text-custom-gold">DIRETORIA</h2>
    <p className="text-custom-blue">Conheça nossos diretores - EM DESENVOLVIMENTO</p>
  </div>
  <div className="w-full grid grid-cols-3 gap-4">
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-6" />
    </div> 
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-6" />
    </div> 
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-6" />
    </div> 
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-6" />
    </div>  
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-6" />
    </div> 
    <div className="flex justify-center">
      <Image src="/newLogo.png" alt="Imagem" width={300} height={300} className="m-6" />
    </div> 
  </div> <br></br>
</section>



    {/* GALERIA  */ }
    < section id = "galeria" className = "max-w-full mx-auto mb-8 flex flex-col items-center justify-center bg-custom-gold p-10" >
          <div className="w-full text-center mb-10" >
          <h3 className="text-3xl font-bold mb-2 text-custom-blue mt-10">GALERIA</h3>
                <p className="text-lg text-gray-700">
                  {/* A */}
                  confira algumas fotos - EM DESENVOLVIMENTO
                </p>
              </div>
            <div className="w-full grid grid-cols-1 ">
            <div className="flex justify-center">
              <Image src="/elencoatual.jpeg" alt="Imagem" width={900} height={900}  />
            </div>
          </div>  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </section >

        


    {/* TITULOS e JOGOS */ }
    < div className = "max-w-full mx-auto mb-8 flex flex-col md:flex-row" > {/* Adicionado flex-col e md:flex-row */ }

      < img src = "/newLogo.png" alt = "Logo União" className = "hidden md:block max-w-md mx-auto mb-4" style = {{ maxWidth: '300px' }
} />
  < section id = "news" className = "w-full md:w-1/2 mx-auto mb-8 flex flex-col items-center justify-center bg-custom-white" >
    <h2 className="text-3xl font-bold mb-4 text-custom-gold mt-10">ÚLTIMOS 5 JOGOS</h2>
    <ul className="text-lg text-custom-blue">
        <li style={{ maxWidth: '300px' }}>União 3 x 5 Quebra Mola</li>
        <li style={{ maxWidth: '300px' }}>União 4 x 2 Quebra Mola</li> <br></br>
        <li style={{ maxWidth: '300px' }}>União 2 x 3 Inter 07</li>
        <li style={{ maxWidth: '300px' }}>União 4 x 3 Inter 07</li> <br></br>
        <li style={{ maxWidth: '300px' }}>União 3 x 2 Colombia</li>
        <li style={{ maxWidth: '300px' }}>União 3 x 0 Colombia</li><br></br>
        <li style={{ maxWidth: '300px' }}>União 3 x 7 Real Fut7</li>
        <li style={{ maxWidth: '300px' }}>União 4 x 5 Real Fut7</li><br></br>
        <li style={{ maxWidth: '300px' }}>União 3 x 6 Toksai FC</li>
        <li style={{ maxWidth: '300px' }}>União 8 x 3 Toksai FC</li><br></br>
    </ul>
</section >

  <section id="news" className="w-full md:w-1/2 mx-auto mb-8 flex flex-col items-center justify-center bg-custom-white"> {/* Alterado w-full para md:w-1/2 */}
        <h2 className="text-3xl font-bold mb-4 text-custom-gold">GOLS 2024</h2>
        <ul className="text-lg text-custom-blue">
            <li>Marcos 10</li>
            <li>Saraiva 6  </li>
            <li>Michel 6 </li>
            <li>Wilsão 5 </li>
            <li>André 5</li>
            <li>Deto 5</li>
            <li>Juninho 4 </li>
            <li>Jhow Jhow  4</li>
            <li>Will 3</li>
            <li>Wellington 2 </li>
            <li>B. Jesus  1</li>
        </ul>
    </section>
    <section id="news" className="w-full md:w-1/2 mx-auto mb-8 flex flex-col items-center justify-center bg-custom-white"> {/* Alterado w-full para md:w-1/2 */}
        <h2 className="text-3xl font-bold mb-4 text-custom-gold">ASSISTENCIAS 2024</h2>
        <ul className="text-lg text-custom-blue">
            <li>André 5</li>
            <li>Marcos 4</li>
            <li>Saraiva 3</li>
            <li>Michel 3</li>
            <li>Dodo 3</li>
            <li>Aldo 3</li>
            <li>Deto 2</li>
            <li>Juninho 2</li>
            <li>Dielson 2</li>
            <li>Wilsão 1</li>
        </ul>
    </section>
</div >
  <section id="patrocinio" className="w-full md:w-1/2 mx-auto mb-8 flex flex-col items-center justify-center bg-custom-white">
    <h2 className="text-3xl font-bold mb-4 text-custom-gold">PATROCINADORES</h2>
    <div className="flex justify-center">
      <div className="m-6" style={{ height: '10px' }}>
        <a href="https://www.instagram.com/cimportsstore/" target="_blank" className="text-lg text-custom-blue mt-2">C imports.store</a>
      </div>
      <div className="m-4" style={{ height: '80px' }}>
        <p className="text-lg text-custom-blue mt-2">Flavio Frutas</p>
      </div>
      <div className="m-4" style={{ height: '80px' }}>
        <p className="text-lg text-custom-blue mt-2">Bar do Arroz</p>
      </div>
    </div> 
  </section>
      </main >

  {/* RODAPE  */ }
  < footer id = "contato" className = "w-full bg-custom-gold py-4 px-24 flex flex-col items-center justify-center text-custom-blue" >
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold mb-2">Redes Sociais</h3>
        <ul className="flex space-x-4">
          <li>
            <a href="https://www.instagram.com/uniao_brasilandiafs/" target="_blank" className="hover:text-gray-400">                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
              <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
            </svg>
            </a>
            {/*<a href="https://www.instagram.com/uniao_brasilandiafs/" target="_blank" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                      </svg>
                      </a>
                      */}
          </li>
        </ul>
      </div>
      <p className="text-sm"> <strong> Desenvolvido por Bruno Santana, famoso JESUS do União </strong></p>
      <div>
        <p className="text-sm"><strong> &copy;2024 União Brasilândia. Todos os direitos reservados.</strong></p>
      </div>
    </div>
        </footer >
   </div >
  );
}
