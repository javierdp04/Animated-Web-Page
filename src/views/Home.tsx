import "./Home.css"
import logoImg from "../assets/logo.svg"

const Home = () => {
    return (
        <>
            <div id="background_0">      
                <div id="content">
                    <div id="logo-container">
                        <img src= {logoImg} alt="Logo img"/>
                    </div>  
                    <div className="text-container">
                        <h2>Haz realidad tu sueño</h2>

                        <p>
                            En Atalaya de Peralta nos encargamos
                            de proporcionarte la vivienda que mas
                            se ajuste a tus necesidades.
                        </p>    
                    </div>
                </div>
            </div>
            <div id="background_1">
                
            </div>
        </>
    )
}

export default Home;