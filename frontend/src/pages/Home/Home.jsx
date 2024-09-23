import Banner from "../../components/Banner/Banner";
import GalleryCards from "../../components/GalleryCards/GalleryCards";
import banner_1 from "../../assets/banner_1.png";
import "./Home.css"


function Home() {

    return (

        <div className="body_home">
            <Banner
                image={banner_1}
                alt="Paysage - Falaises et mer"
                text="Chez vous, partout et ailleurs"
                ShadowDark={true} />
            <GalleryCards />
        </div>
    )
}
export default Home
