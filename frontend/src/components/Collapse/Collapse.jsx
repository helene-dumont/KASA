import "./Collapse.css"
import { useState } from "react"
import arrow_collapse from "../../assets/arrow_collapse.png"


function Collapse({ title, content }) { // On définit 2 props en arguments
    const [isOpen, setIsOpen] = useState(false) // Stockage des informations indiquant si l'élément est enroulé ou déroulé

    const changeCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse_all">
            <div className="collapse_element" >
                <div className="collapse">
                    <h3 className="collapse_title">{title}</h3>
                    <img src={arrow_collapse} alt="Enrouler ou dérouler le contenu" className={`arrow ${isOpen ? "rotate" : ""}`} onClick={changeCollapse} />
                </div>
            </div>

            <div className={`collapse_content ${isOpen ? "expand" : "collapsed"}`}>
                {Array.isArray(content) ? ( // Condition : si contenu est ouvert et est un tableau, on applique méthode .map pour générer l'affichage sous forme de liste 
                    <ul className="collapse_list">
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : ( // Sinon affichage sous forme d'une balise <p> 
                    <p className="collapse_content">{content}</p>
                )}
            </div>

        </div>
    )
}

export default Collapse
