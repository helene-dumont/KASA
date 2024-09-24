import star_active from "../../assets/star_active.png"
import star_inactive from "../../assets/star_inactive.png"
import "./Rate.css"

function Rate({ rate }) {

    const maxNumberStars = 5
    const filledStars = parseInt(rate) // Fonction pour convertir une chaîne de caractères en nombre
    const emptyStars = maxNumberStars - filledStars

    // Concaténation de deux tableaux d'étoiles (étoiles remplies et étoiles vides)
    const rateStars = () => {
        let stars = Array(filledStars).fill().map((_, i) => (
            //.fill remplit le tableau en écrasant le tableau d'origine
            //.map parcourt les éléments pour remplir le tableau d'étoiles pleines
            <img src={star_active} alt="Etoiles pleines" key={i} className="rate_star" />)
        )

        //jonction d'un tableau d'étoiles vides au tableau "stars"
        stars = stars.concat(Array(emptyStars).fill().map((_, i) => (

            <img src={star_inactive} alt="Etoiles vides" key={i + filledStars} className="rate_star" />))
        )

        return stars
    }


    return (
        <div className="rate">
            {rateStars()}
        </div>
    )
}

export default Rate
