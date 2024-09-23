import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "../../assets/logo.png"
import "./Header.css"

function Header() {
    const [activeLink, setActiveLink] = useState("") // String vide : aucun lien actif n'est sélectionné au début.

    const linkClick = (e) => {
        setActiveLink(e)
    }

    return (
        <header className="header">
            <div>
                <img src={logo} alt="KASA logo" />
            </div>
            <nav className="header_nav">
                <Link to="/" onClick={() => linkClick("/")} className={`header_link ${activeLink === "/" ? "underline" : ""}`}>Accueil</Link>
                <Link to="/about" onClick={() => linkClick("/about")} className={`header_link ${activeLink === "/about" ? "underline" : ""}`}>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header
