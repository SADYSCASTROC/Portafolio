import { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import styled from "styled-components";
import fotoPerfil from '../../img/hero-foto-perfil.png';
import cv from '../../img/Curriculum Sadys.pdf'

export const Description = () => {
  useEffect(() => {
    AOS.init({
        duration: 2000
    });
}, []);

  return (
    <div className="animate__fadeInLeft" data-aos="fade-up-right" id='inicio'>    
      <DescriptionAbput>
      <img src={fotoPerfil} alt="foto" />
      <div className="container" data-aos="fade-up-right">
        <h3>Sadys Castro, <span>Desarrolladora web</span></h3>
        <p>Ingrese al mundo de la tecnología porque la 
          duda de saber como funcionaban las cosas en el mundo tecnológico,

          un mundo nuevo, fascinante, de ahí surgió un objetivo <i>"aprender programación". </i>  <br />

          Me considero una mujer comprometida, proactiva

          con un alto interés en aprender y orgullosa de lo que he logrado hasta el día de hoy. 

          Busco siempre aprender con el fin de crecer personal e intelectualmente.
        </p>
        <br />
        <br /><br />
        <a download='CurriculoSadys' href={cv}>Desacargar Cv</a>
      </div>
    </DescriptionAbput>
    </div>
  )
}

const DescriptionAbput = styled.section`

:root {
  --wite-leter: #FFFFFF;
  --background-black: #1B2631;
  --hover-pink: #FF00FF;
  --vectores-gray: #566573;
}

height: auto;
width: 100%;
padding: 20px;
text-align: center;
text-align: -webkit-center;
text-align: center;
margin: auto;


img{
  height: 240px;
  margin-top: 80px;
}
.container{
  margin-top: 5px;
  color:var(--wite-leter);
}
}
h3{
  font-size: 1.6rem;
  color: var(--wite-leter);
  span{
    font-size: 1.2rem;
    color: var(--hover-pink);
    letter-spacing: 4px;
  }
}
p{
  margin-top: 15px;
  font-size: 1.3rem;
  line-height: 1.6rem;
  font-family: Mynerve;

}

a{
  margin-top: 25px;
  padding: 8px;
  background-color: var(  --vectores-gray);
  color: var(--wite-leter);
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  text-decoration: none;
}

button:hover{
  border: 2px solid var(--hover-pink);
}
@media (min-width: 768px) {
  .container{
    width: 85%;
    padding: 20px;
  }
  h3{
    font-size: 2rem;
    span{
      font-size: 1.2rem;
    }
  }
  p {
    font-size: 1.7rem;
    line-height: 2.6rem;
}
@media (min-width: 992px) {
  width: 90%;
  display: flex;
  flex-direction: row-reverse;

  .container{
    width:50% ;
    padding:0;
    margin-top: 87px;
    margin-right: 40px;
  }
  img{
    width:20%;
    height: 25%;
    margin-right: 80px;
  }
  p{
    font-size: 1.3rem;
  }
}

`

