import { Link } from "react-router-dom"
import "./GalleryCards.css"
import { useState, useEffect } from 'react'

function GalleryCards() {
    const [properties, setProperties] = useState([]) // Initialisation du state

    // Appel à l'API avec fetch pour récupérer dynamiquement les images
    useEffect(() => {
        fetch("http://localhost:8080/api/properties")
            .then((response) => response.json())
            .then(data => {
                setProperties(data)
            })
    }, []) // Tableau de dépendances vide (un seul appel au premier rendu)

    return (
        <div className="gallery">
            <div className="gallery_all">
                {properties.map(property => (    // Méthode .map pour itérer sur le tableau de propriétés et générer une liste de composants de galerie.
                    // On ajoute "key" avec l'id associé à l'élément <div> pour lui donner une identité stable.                  
                    <div key={property.id} className="gallery_element">
                        <h2 className="gallery_text">{property.title}</h2>
                        <Link to={`./location/${property.id}`}>
                            <img src={property.cover} alt={property.title} className="gallery_img" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryCards
