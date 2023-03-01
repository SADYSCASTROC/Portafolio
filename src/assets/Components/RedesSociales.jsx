import styled from "styled-components"
import '../../index.css'
import faceboock from '../../img/faceboock.png'
import linkedin from '../../img/akar-icons_linkedin-v2-fill.png'
import git from '../../img/mingcute_github-fill.png'
import email from '../../img/email.png'

export const RedesSociales = () => {
  return (
    <SectionRedes>
        <div className='containr-img'>
            <img src={email} alt="" />
            <img src={linkedin} alt="" />
            <img src={faceboock} alt="" />
            <img src={git} alt="" />
        </div>

        <div className='separator animate__bounceOut'></div>

        <div className="technologies">
            <p>Tecnologias:</p>
            <p>JavaScript,React,Html,Css</p>
        </div>


    </SectionRedes>
  )
}
const SectionRedes = styled.section`
margi-top:10px;
height: 185px;

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
`