import { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import styled from "styled-components"
import '../../index.css'
import faceboock from '../../img/faceboock.png'
import linkedin from '../../img/akar-icons_linkedin-v2-fill.png'
import git from '../../img/mingcute_github-fill.png'
import email from '../../img/email.png'

export const RedesSociales = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);


  return (

    <div data-aos="fade-up-right">
    <SectionRedes>
        <div className='containr-img'>
          <a href="mailto:sadyscastro@gmail.com" target='_blank'><img src={email} alt=""/></a>  
          <a href="https://www.linkedin.com/in/sadys-castro/" target='_blank'><img src={linkedin} alt="" /></a>  
          <a href="https://www.facebook.com/sadys.castro.56" target='_blank'> <img src={faceboock} alt="" /></a>
           <a href="https://github.com/SADYSCASTROC" target='_blank'><img src={git} alt="" /></a> 
        </div>

        <div className='separator animate__bounceOut'></div>

        <div className="technologies">
            <p>Tecnologias:</p>
            <p>JavaScript,React,Html,Css</p>
        </div>


    </SectionRedes>
    </div>
  )
}
const SectionRedes = styled.section`
margi-top:10px;
height: 185px;

a{
    text-decoration: none;
}
.containr-img{
    margin-top:40px;
    text-align: center;

}
img{
    height: 45px;
    width: 45px;
    margin:5px;
}
.separator{
    width: 70%;
    height: 2px;
    background-color: var(--wite-leter);
    // margin: calc(50% - 120px);
    margin: auto;
    
}
.technologies{
    color:var(--wite-leter);
    margin-top:50px;
    text-align: center;
}


@media (min-width: 992px) {
    .separator{
        width: 30%;  
    }
    img{
        margin:10px;
    }
}
`