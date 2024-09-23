import Banner from "../../components/Banner/Banner"
import banner_2 from "../../assets/banner_2.png"
import Collapse from "../../components/Collapse/Collapse"
import { collapseAbout } from "../../data/CollapseTable"
import "./About.css"

function About() {
    return (
        <div className="about">
            <Banner
                image={banner_2}
                alt="Montagnes enneigées"
            />
            {collapseAbout.map((item, index) => (  //Mapping sur chaque élément du tableau d'objets.
                <Collapse
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    )
}

export default About