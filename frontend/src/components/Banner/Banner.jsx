import "./Banner.css"

function Banner({ image, alt, text, ShadowDark }) {
    // Ajout d'une ombre et assombrissement de l'image en fonction de la page (en utilisant la condition ternaire)
    return (
        <div className="banner">
            <img src={image} alt={alt} className={ShadowDark ? "banner_img banner_shadow" : "banner_img"} />
            <h1 className="banner_text">{text}</h1>
        </div>
    )
}

export default Banner
