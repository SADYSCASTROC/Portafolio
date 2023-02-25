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
                    <a onClick={handleClick} href="">Inicio</a>
                    <a onClick={handleClick} href="">Sobre mí</a>
                    <a onClick={handleClick} href="">Portafoleo</a>
                    <a onClick={handleClick} href="">Contacto</a>
                </div>

                <div className="burguer">
                    {/* Le pasamos las props */}
                    <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <Bgdiv className={`initial ${clicked ?'active' : ''}`}></Bgdiv>
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

h2{
    font-weight: bold;
    color:var(--wite-leter);
    width: 100%;
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
    top: 30%;
    lef: 0;
    rigth: 0;
    text-align:center;
    a{
        font-size: 1rem;
        margin-top: 1.5rem;
        color: var(--background-black);
    }
}

.burguer{
    @media(min-width: 768px){
        display: none;
    }
}

`
const Bgdiv = styled.div `

position: absolute;
background-color:  #FFFFFF;
top: -700px;
left:-1000px;
z-index: -1;
width: 70%;
height: 100%;
transition: all .8s ease;
&.active{
    border-radius: 0 0 80% 0;
    width: 70%;
    height: 100%;
    top: 0;
    left:0;
}

`