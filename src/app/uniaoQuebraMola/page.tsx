import Link from "next/link";
import Image from "next/image";

export default function uniaoQuebraMola() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* CABEÇALHO DA PÁGINA */}
      <header className="w-full bg-custom-blue py-4 px-24 flex items-center justify-between">
        <div>
          <a href="/">
            <Image src="/newLogo.png" alt="Logo União" width={120} height={40} />
          </a>
        </div>
        <nav className="flex">
          <a href="/#elenco" className="text-white mr-4 icon-link">Elenco</a>
          <a href="/#diretoria" className="text-white mr-4 icon-link">Diretoria</a>
          <a href="/#galeria" className="text-white mr-4 icon-link">Galeria</a>
          <a href="/#news" className="text-white mr-4 icon-link">Infos</a>
          <a href="/#patrocinio" className="text-white mr-4 icon-link">Patrocinadores</a>
          <a href="/noticias" className="text-white mr-4 icon-link">Noticias</a>
          <a href="/#contato" className="text-white mr-4 icon-link">Contato</a>
        </nav>
      </header>

      <section className="p-5 flex-grow">
      <h1 className="text-3xl font-bold text-custom-blue mt-5">
          <Link href="/uniaoQuebraMola" className="text-custom-blue hover:text-custom-gold">
              União x  Quebra Mola
          </Link>
      </h1>
        <p className="text-xs text-custom-blue" > 20/04/2024 - Assessoria de imprensa</p>
        <p className="text-3x1 font-bold text-custom-gold mt-10">"UFFAAAA"</p>

        <p className="text-custom-blue mt-5">
          No último jogo pela Liga Ouro, o União enfrentou a equipe Quebra-Mola em uma partida emocionante. Os dois jogos foram disputados com grande intensidade, resultando em uma vitória para cada lado.<br></br>
          No primeiro jogo, a equipe do Quebra-Mola saiu vitoriosa por 5x3. No entanto, o União mostrou sua força no segundo jogo, vencendo por 4x2.
        </p> <br></br>

        <p className="text-custom-blue">
          Com ambas as equipes determinadas a vencer e se entregando ao máximo, o clima da partida ficou bastante acirrado. Houve momentos de tensão, resultando em brigas, três expulsões, cobranças de pênalti e até mesmo um shootout emocionante defendido pelo nosso goleiro Aldo.
        </p>

        <div className="flex justify-left mt-10">
          <Image src="/elencoatual.jpeg" alt="Imagem" width={500} height={500} />
        </div>
        <p className="text-custom-blue"> img da partida </p>
      </section>
      {/* RODAPE  */}
      <footer id="contato" className="w-full bg-custom-gold py-4 px-24 text-custom-blue">
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
      </footer>
    </div>
  );
}
