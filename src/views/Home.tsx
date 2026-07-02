import "./Home.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/all";
import puebloPeralta from "../assets/puebloPeralta.jpg"

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Home = () => {


    useGSAP(() => {

        const tl = gsap.timeline();
        const split = SplitText.create("#animated-text", {type:"chars"});
        const h2 = document.getElementById("h2-animation");
        const p = document.getElementById("p-animation");

        tl.from(split.chars, {
            fontSize : 70,
            x : 0,
            opacity : 0,
            duration : 0.6,
            ease : "power3.out",
            stagger : 0.15,})
        tl.from(h2, {
            y : 40,
            opacity : 0,
            duration : 0.5,
            ease : "power3.out",
        })
        tl.from(p, {
            y : 40,
            opacity : 0,
            duration : 0.5,
            ease : "power3.out",
        }, "-=0.5")


    });

        
    return (
        <>
            <div className="background b0">      
                <div id="content">
                    <div id="logo-container">
                        <span id="animated-text" className="span-container text">
                            ATALAYA DE PERALTA
                        </span>
                    </div>  
                    <div className="text-container">
                        <h2 id="h2-animation" className="text">Haz realidad tu sueño</h2>

                        <p id="p-animation" className="text">
                            En Atalaya de Peralta nos encargamos
                            de proporcionarte la vivienda que mas
                            se ajuste a tus necesidades.
                        </p>    
                    </div>
                </div>
            </div>
            <div className="background b1">
                <section id="Nosotros">
                    <div id="left">
                        <h2>¿Quienes somos?</h2>
                        <img src= { puebloPeralta } alt="pueblo peralta"></img>
                    </div>
                    <div id="right">
                        <p> Atalaya de peralta, S.L. Con su sede social en la calle Dabán, 12, de Peralta (Navarra) 
                            es una empresa dedicada a la promoción de viviendas de toda clase, 
                            tanto de tipo libre como de protección oficial                             
                        </p><br></br>
                        <p>
                            El nombre de la sociedad se inspira en la Atalaya de la localidad de Peralta (Navarra), 
                            una antigua construcción de carácter militar que domina la localidad y desde la que está tomada la imagen.
                        </p><br></br>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;