import whatsapp from "../../assets/whatsapp.png";
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"

import './contato.css'

export function Contato() {
  return (
    <main>
      <div>
        <h1>Contato</h1>
        <ul className="ul-redes">
          <li className="redes">
            <a href="https://wa.me/5551994089203" target="blank_">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <p>Whatsapp</p>
          </li>
          <li className="redes">
            <a href="https://www.linkedin.com/in/leandro-santos-front-end/" target="blank_">
              <img src={linkedin} alt="linkedin" />
            </a>
            <p>linkedin</p>
          </li>
          <li className="redes">
            <a href="https://github.com/leandrowork03" target="blank_">
              <img src={github} alt="github" />
            </a>
            <p>github</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
