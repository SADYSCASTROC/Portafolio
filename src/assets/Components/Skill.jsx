import styled from "styled-components";
import { useState, useEffect } from "react";
import { data } from "../../data";



export const Skill = () => {

    const [skillTech, setSkill] = useState(data)
    const { skills } = skillTech;

    useEffect(() => {
        setSkill(skillTech);
    }, [])


    return (

        <TechnicalSkills>
            {
                skills.map(item => (
                    <div key={item.name} className="card-tecnologias" data-aos="fade-right">
                        <img src={item.img} alt="imagen" className="img-tecnologia hiden" />
                    </div>
                ))
            }
        </TechnicalSkills>

    )
}
const TechnicalSkills = styled.div`
 display: flex;
 height: 216px;
 overflow-x: scroll;
 scroll-snap-type: proximity;
 width: 100%;
 margin-top:15px;

 .card-tecnologias{
    position: relative;
    scroll-snap-align: center;
    min-width: 190px;
    max-width: 300px;
    height: 100px;
    margin: 40px -10px 0;
    padding: 15px ;

 }
 .img-tecnologia{
    height: 120px;
    width: 124px;
    transition: all 1.2s ease-out;
 }
 @media (min-width: 992px) {
    overflow-x: hidden;
    overflow-y: hidden;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    padding: 0;
    width: 60%;
    justify-content: center;

    .card-tecnologias{
        position: sticky;
        overflow-y: hidden;
        height: auto;
        margin: -4px;
        padding: 0px;
        margin-top: 24px;
    }
 }
 `