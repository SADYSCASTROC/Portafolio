import styled from "styled-components";
import fotoPerfil from '../../img/hero-foto-perfil.png'
export const Description = () => {
  return (
    <div className="animate__fadeInLeft">    
      <DescriptionAbput>
      <img src={fotoPerfil} alt="foto" />
      <div className="container">
        <h3>Sadys Castro, <span>Desarrolladora web</span></h3>
        <p>Ingrese al mundo de la tecnologia porque la 
          duda de saber como funcionaban las cosas en el mundo tecnologico,
          un mundo nuevo, fascinante, de ahi surgio un objetivo "aprender programacion". 
          Me considero una mujer comprometida, proactiva
          con un alto interes en aprender y orgullosa de lo que he logrado hasta el dia de hoy. 
          Busco siempre aprender con el fin de crecer personal eintelectualmente.
        </p>
      </div>
      <button>Desacargar Cv</button>
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

img{
  height: 190px;
  margin-top: 75px;
}
.container{
  margin-top: 5px;
  color:var(--wite-leter);
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
  font-size: 0.9rem;
  line-height: 1.5rem;

}

button{
  margin-top: 18px;
  padding: 8px;
  background-color: var(  --vectores-gray);
  color: var(--wite-leter);
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;}
button:hover{
  border: 2px solid var(--hover-pink);
}


`

