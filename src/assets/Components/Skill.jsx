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
                    <div key={item.name} className="card-tecnologias">
                        <img src={item.img} alt="imagen" className="img-tecnologia" />
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

 .card-tecnologias{
    position: relative;
    scroll-snap-align: center;
    width: 80%;
    min-width: 190px;
    max-width: 300px;
    height: 100px;
    margin: 40px 0px 0;
 }
 .img-tecnologia{
    height: 150px;
    width: 150px;
 }
 `