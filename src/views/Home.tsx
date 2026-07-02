import "./Home.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/all";

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
                
            </div>
        </>
    )
}

export default Home;