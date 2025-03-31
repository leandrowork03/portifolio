import { Link } from "react-router-dom"
import"./header.css"

export function Header(){
    return(
        <header>
            <h1>Dev.Leandro</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/Contato'>Contato</Link>
            </nav>
        </header>
    )
}