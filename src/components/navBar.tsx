import "./navBar.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


const NavBar = () => {

    useGSAP(() => {
        const nav = document.querySelector("nav");

        gsap.from(nav, {
        y : -70,  
        ease : "power1.out",
        duration : 1,
        delay : 2
        })
    })

    return (
        <nav>
            <div id="links-container">
                <a href="#">Inicio</a>
                <a href="#Nosotros">Nosotros</a>
                <a href="#Promociones">Promociones</a>
                <a href="#Contacto">Contacto</a>
            </div>
        </nav>
    );
};

export default NavBar;