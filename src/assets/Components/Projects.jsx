import { useState } from "react";
import styled from "styled-components";
import '../../index.css'
import imagenOjo from '../../img/bi_eye-fill.png'
import { data } from "../../data";

export const Projects = () => {
    const [portfolioProjects, setportfolioProjects] = useState(data);
    const { projects } = portfolioProjects;
    return (
        <div>     
        <ProjectsSection>
            <h2>Proyectos</h2>
            <div className="separator animate__bounceOut"></div>
            <div className="container-car-project">
                {
                    projects.map(item => (
                        <div key={item.name} className="card-projects" data-aos="fade-right">
                            <img src={item.img} alt="imagen" className="img-projects" />
                            <div className="descrition">
                                <h3>{item.name}</h3>
                                <p>{item.tecnologias}</p>
                            </div>

                            <a href={item.links} target='blank' className="ov-btn-grow-skew-reverse">
                                <img src={imagenOjo} alt="" className="icons" />
                            </a>

                        </div>
                    ))
                }
            </div>
        </ProjectsSection>
        </div>
    )
}

const ProjectsSection = styled.section`
height: auto;
width: 100%;
padding: 20px;
text-align: center;
.separator{
    width: 70%;
    height: 2px;
    background-color: var(--wite-leter);
    // margin: calc(50% - 120px);
    margin: auto;
}
.container-car-project{
    display: flex;
    height: 320px;
    overflow-x: scroll;
    scroll-snap-type: proximity;
    width: 100%;
}
.card-projects{
    position: relative;
    scroll-snap-align: center;
    width: 80%;
    min-width: 190px;
    max-width: 300px;
    height: 100px;
    margin: 50px 10px 0;
}

h2{
    margin-top:25px;
    color:var(--wite-leter);
    width: 100%;
    text-align: center;
    font-size: 2rem ;
}

.img-projects{
    height: 180px;
    width: 180px;
    opacity: 2;

}
.descrition{
    word-wrap: break-word;
    height: 100px;
    border-radius: 20px 20px 0 0;
    position: absolute;
    left: 0;
    background-color: rgba(0, 0, 0, .8);
    width: 100%;
    padding: 10px;
    opacity: 0;
    bottom: -40px;
    transition: .5s;  
    min-width: 190px;
    max-width: 300px; 
}
.descrition:hover{
    opacity: 1;
    bottom: 0;
  
}


p{
    color: var(--hover-pink);
}
h3{
    color: var(--hover-pink);

}

    a{
        text-decoration: none;
        margin-left: 38px ;
        background-color: var(--vectores-gray);
        margin-top: 15px;
        width: 60%;
        display: block;
        border: 2px solid #FF00FF;
    }

    /*** ESTILOS BOTÓN GROW SKEW REVERSE ***/
    .ov-btn-grow-skew-reverse {
      background-color: var(--vectores-gray); /* color de fondo */
      border: 2px solid #FF00FF; /* tamaño y color de borde */
      padding: 2px;
      border-radius: 3px; /* redondear bordes */
      position: relative;
      z-index: 1;
      overflow: hidden;
      display: inline-block;
      margin-left: -20px ;
    }
    .ov-btn-grow-skew-reverse::after {
      content: "";
      background: linear-gradient(70deg, #7c1088,  #e57fdc); /* color de fondo hover */
      position: absolute;
      z-index: -1;
      padding: 16px 20px;
      display: block;
      left: -20%;
      right: -20%;
      top: 0;
      bottom: 0;
      transform: skewX(45deg) scale(0, 1);
      transition: all 0.3s ease;
    }
    .ov-btn-grow-skew-reverse:hover::after {
      transition: all 0.3s ease-out;
      transform: skewX(45deg) scale(1, 1);
    }

    .icons{
        height: 20px;
        width: 20px;
        margin-top: 5px;
        bor
        
    }



`
