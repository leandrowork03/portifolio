import "./sobre.css";

export function Sobre() {
  return (
    <main>
      <h1>Página Sobre</h1>
      <section id="sobre">
        <h2>Sobre Mim</h2>

        <p>
          Olá! Sou <strong>Leandro Santos</strong>, um programador Front-End
          apaixonado por criar experiências digitais incríveis. Comecei minha
          jornada na programação há alguns anos com JAVA mas me apaixonei pelo
          Front-End, desde então, tenho me dedicado a aprimorar minhas
          habilidades, com foco principal no{" "}
          <strong>desenvolvimento front-end</strong>.
        </p>

        <p>
          Tenho um sólido entendimento em{" "}
          <strong>HTML, CSS e JavaScript</strong>, e adoro aplicar minhas
          habilidades para criar interfaces de usuário modernas e responsivas.
          Ao longo da minha trajetória, também me estou me aprofundadando em{" "}
          <strong>React</strong>, criando interfaces dinâmicas e escaláveis com
          a ajuda de hooks como <code>useState</code> e <code>useEffect</code>.
        </p>

        <div className="habilidades">
          <h3>Habilidades Técnicas:</h3>
          <ul>
            <li className="li-sobre">
              <strong>React.js</strong>: Construção de interfaces dinâmicas com
              hooks e gerenciamento de estado.
            </li>
            <li className="li-sobre">
              <strong>HTML5 & CSS3</strong>: Criação de layouts responsivos e
              acessíveis, com experiência em Flexbox e Grid.
            </li>
            <li className="li-sobre">
              <strong>JavaScript</strong>: Programação funcional e manipulação
              de DOM, além do uso de <strong>Promessas</strong> e funções
              assíncronas.
            </li>
            <li className="li-sobre">
              <strong>Git & GitHub</strong>: Controle de versão e colaboração em
              projetos, utilizando Git para versionamento e GitHub Pages para
              hospedagem.
            </li>
            <li className="li-sobre">
              <strong>TypeScript</strong> (em desenvolvimento): Aprendendo a
              usar tipagem estática para melhorar a qualidade do código.
            </li>
          </ul>
        </div>

        <div className="projetos">
          <h3>Projetos:</h3>
          <p>
            Ao longo do tempo, desenvolvi diversos projetos, como clones de
            aplicativos e páginas interativas, que me ajudaram a consolidar meus
            conhecimentos em <strong>React</strong> e{" "}
            <strong>JavaScript</strong>. Dentre os projetos mais relevantes,
            estão:
          </p>
          <ul>
            <li>
              <strong>Instagram Clone (Logout Funcional)</strong>: Uma aplicação
              interativa que simula o processo de login/logout de um usuário.
            </li>
            <li>
              <strong>Página de E-commerce GTA</strong>: Um projeto ilustrativo
              de venda de jogos, desenvolvido com <strong>HTML</strong>,{" "}
              <strong>CSS</strong> e <strong>JavaScript</strong>.
            </li>
            <li>
              <strong>Gerador de Frases Aleatórias</strong>: Uma aplicação React
              que utiliza APIs para gerar frases aleatórias.
            </li>
          </ul>
        </div>

        <p>
          Estou sempre em busca de novos desafios e oportunidades para aprender
          e crescer como desenvolvedor. Além disso, sou um entusiasta de{" "}
          <strong>geografia econômica</strong> e gosto de entender como a
          tecnologia pode impactar o mundo ao nosso redor.
        </p>

        <p>
          Se você estiver interessado em colaborar ou aprender mais sobre meu
          trabalho, não hesite em{" "}
          <a href="mailto:leandrowork03@gmail.com">entrar em contato</a>!
        </p>
      </section>
    </main>
  );
}
