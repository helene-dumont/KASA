import "./Tags.css"

function Tags({ tags }) {

    return (
        <div className="tags">
            {tags.map((tags, index) => ( // Méthode .map parcourt les éléments du tableau de tags
                <div key={index} className="tag">
                    {tags}
                </div>
            ))}
        </div>
    )
}

export default Tags