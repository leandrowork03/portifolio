import"./home.css"
import minhaft from '../../assets/minhaft.jpg'
import css from '../../assets/css.png'
import html5 from '../../assets/htm5l.png'
import js from '../../assets/js.png'
import reactLogo from '../../assets/reactLogo.png'
import instaClone from '../../assets/instaClone.png'
import gta from '../../assets/gta.png'
import frases from '../../assets/frases.png'

export function Home(){
    return(
        <>
        <main>
            <h1>sejá muito bem vindo(a) ao meu porfólio</h1>
            <div className="container">
               <h6 className="text">Olá muito prazer me chamo <br /><b className="nome">Leandro Santos</b> programador Front-End<br /></h6>
                <img src={minhaft} alt="minha foto de perfil" />
               </div>
        </main>
        <section className="sec1">
            <h1>Habilidades:</h1>
           <ul className="habilidades">
                <li className="logo"><img src={css} alt="lodo do css" /></li>
                <li className="logo"><img src={html5} alt="logo do html" /></li>
                <li className="logo"><img src={js} alt="logo do javaScript" /></li>
                <li className="logo"><img src={reactLogo} alt="logo do react" /></li>

            </ul>
        </section>
        <section className="sec2">
            <ul className="exemple">
                <h3>Exemplos de trabalhos:</h3>
                <li className="li-exemple">

                    <a href="https://leandrowork03.github.io/InstaLogout-clone/" target="blank_"><img src={instaClone} alt="imagem instagram clone" /></a>
                    <p>instagram clone log out funcional, to do list<br />
                    Tecnologias usadas: html, css e javaScript</p>
                    <a href=""></a>
                    <a href="https://github.com/leandrowork03/InstaLogout-clone">Projeto no gitHub</a>
                </li>
            
                <li className="li-exemple">
                    <a href="https://leandrowork03.github.io/projeto-gta-dev-em-dobro/" target="blank_"><img src={gta} alt="página do gta" /></a>
                    <p>Página ilustrativa da venda de jogos gta "e-comerce" <br />
                    tecnologias usadas: html, css e JavaScript</p>

                    <a href="https://github.com/leandrowork03/projeto-gta-dev-em-dobro">Projeto np gitHub</a>
                </li>
                <li className="li-exemple">
                    <a href="https://leandrowork03.github.io/projeto-de-frases-aleatorias/" target="blank"><img src={frases} alt="página de frases aleatórias" /></a>
                    <p>Página que gera frases aleatórias<br />Projeto desenvolvido com:<br /> React.js ,html ,css e JavaScript para a interface e interatividade</p>

                    <a href="https://github.com/leandrowork03/projeto-de-frases-aleatorias">Projeto no gitHub</a>
                </li>
                <h1>Eeste porfólio foi feito com o FrameWork React</h1>
                <h2>React router dom </h2>
            </ul>

        </section>
        </>
    )
}

