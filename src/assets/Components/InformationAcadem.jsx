import React from 'react'
import styled from 'styled-components';
import '../../index.css'
import edicacion from '../../img/icon-education.png';
import idiomas from '../../img/idioas.png';
import { Skill } from './Skill';

export const InformationAcadem = () => {
    return (
        <div data-aos="fade-right">
            <Academic>
                <h2>Sobre mí</h2>
                <div className='separator animate__bounceOut'></div>
                <div className='container-education' data-aos="fade-right">

                    <div className='studen' data-aos="fade-right">
                        <div className='conte'><span><img src={edicacion} alt="" />
                        </span>
                            <h4>Estudios</h4>
                        </div>
                        <div className='car-education' data-aos="fade-right">
                            <div className='circle'></div> <div className='corporacion'><p>Programacion de Software</p> <p>2019-2020</p> <p>Sena</p></div>
                            <div className='circle'></div> <div className='corporacion'><p>Desarrollo web Frontend</p> <p>2022-2022</p> <p>Laboratoria</p></div>
                        </div>

                        <div className='conte'><span><img src={idiomas} alt="" />
                        </span>
                            <h4>Idiomas</h4>
                        </div>
                        <div className='car-education' data-aos="fade-right">
                            <div className='circle'></div> <div className='corporacion'> <p>Español/ Nativo</p> </div>
                            <div className='circle'></div> <div className='corporacion'><p>Ingles/ Basico</p></div>
                        </div>
                    </div>
                    <h3 data-aos="fade-right">Habilidades tecnicas</h3>
                    <Skill/>
                </div>
            </Academic>
        </div>
    )
}

const Academic = styled.section`
:root {
    --wite-leter: #FFFFFF;
    --background-black: #1B2631;
    --hover-pink: #FF00FF;
    --vectores-gray: #566573;
  }
h2{
    margin-top:20px;
    color:var(--wite-leter);
    width: 100%;
    text-align: center;
    font-size: 2rem ;
}

.separator{
    width: 70%;
    height: 2px;
    background-color: var(--wite-leter);
    // margin: calc(50% - 120px);
    margin: auto;
}
img{
    height: 40px;
}
.container-education{
    padding:20px;

}

.conte{
display:flex;
align-items: center; 
margin: 10px;

}
h4{
    margin-left: 15px ;
    color: var(--wite-leter);
    font-size: 1.6rem ;


}

.circle{
    background-color: var(--wite-leter);
    border-radius: 50%;
    height: 14px;
    width: 13px;
    margin-left: 50px ;
    magin-top: 5px;

}
.corporacion{
    color:var(--wite-leter);
    width: 70%;
    position: relative;
    top: -13px;
    left: 80px ;
    font-size: 0.9rem ;
}
h3{
    color:var(--wite-leter);
    margin-top: 80px;
    width: 100%;
    text-align: center;
    font-size: 1rem ;
}
`
