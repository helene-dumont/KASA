import "./Host.css"

function Host({ host }) {
    const [firstName, lastName] = host.name.split(' ') // Méthode .split pour diviser le nom de l'hôte en prénom et nom de famille

    return (
        <div className="host">
            <div className="host_name">
                <p>{firstName}</p>
                <p>{lastName}</p>
            </div>
            <img src={host.picture} alt={host.name} className="host_picture" />
        </div>
    )
}

export default Host