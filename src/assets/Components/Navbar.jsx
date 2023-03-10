import { useState } from "react";
import styled from "styled-components";
import { BurguerButton } from "./BurguerButton";

export const Navbar = () => {

    const [clicked, setclicked] = useState(false);

    const handleClick = () => {
        // cuando esta true lo pasa a folse y vice versa
        setclicked(!clicked);
    }

    return (
        <>
            <NavContainer>
                <h2>SADYS CASTRO</h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a onClick={handleClick}  href="#inicio">Inicio</a>
                    <a onClick={handleClick}  href="#sobreMi">Sobre mí</a>
                    <a onClick={handleClick}  href="#portafolio">Portafoleo</a>
                    <a onClick={handleClick}  href="#contacto">Contacto</a>
                </div>

                <div className='pantallasGrandes'>
                    <a   href="#inicio">Inicio</a>
                    <a   href="#sobreMi">Sobre mí</a>
                    <a   href="#portafolio">Portafoleo</a>
                    <a   href="#contacto">Contacto</a>
                </div>

                <div className="burguer">
                    {/* Le pasamos las props */}
                    <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <Bgdiv className={`initial ${clicked ? 'active' : ''}`}></Bgdiv>
            </NavContainer>
        </>
    )
}

const NavContainer = styled.nav`
:root {
    --wite-leter: #FFFFFF;
    --background-black: #1B2631;
    --hover-pink: #FF00FF;
    --vectores-gray: #566573;
  }
.pantallasGrandes{
    display:none;
}
h2{
    font-weight: bold;
    color:var(--wite-leter);
    width: 100%;
    font-size: 1.3rem;
    
}
padding: 10px;
display:flex;
aling-items: center;
justify-content: space-between;

a{
    color: var(--wite-leter);
    text-decoration: none;
    margin-right: 1rem;
}
.links{
    position: absolute;
    top: -700px;
    left: -100px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
        color: var(--wite-leter);
        display: block;
    }
    @media(min-width: 769px){
        position: initial;
        width: 100%;
        a{
            color: var(--wite-leter);
            display:inline;
        }
    }
}
.links.active{
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index:1;
    top: 208%;
    lef: 0;
    rigth: 0;
    transition: all .9s ease;
    text-align:center;
    a{
        font-size: 1rem;
        margin-top: 1.5rem;
        color: var(--background-black);
    }
}

.burguer{
    @media(min-width: 769px){
        display: none;
    }
}

// aquiiiiiiiiiiiiiii
@media (min-width: 770px) {
    .pantallasGrandes{
        display: block;
        width: 100%;
        margin-left: auto;
        margin-right: auto;

    }

    .links{
        display:none;
    }
}
`
const Bgdiv = styled.div`
position: absolute;
background-color:  #FFFFFF;
top: -700px;
left:-1000px;
width: 100%;
height: 100%;
transition: all .8s ease;
@media(min-width: 769px){
 display: none;
}
&.active{
    border-radius: 0 0 80% 0;
    width: 100%;
    height: 100%;
    top: 55px;
    left: 0;
    position: fixed;
}
`