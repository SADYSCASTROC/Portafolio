import { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import styled from "styled-components";
import '../../index.css';
import imgForm from '../../img/mdi_user-card-details-outline.png';
import { Form } from "./Form";

export const ContactSection = () => {

  useEffect(() => {
    AOS.init({
        duration: 2000
    });
}, []);

  return (
    <div data-aos="fade-up-right" id='contacto'>
    <Contact>
      <h2>Contacto</h2>
      <div className="separator animate__bounceOut"></div>
      <div className="info-contact">
        <img src={imgForm} alt="" className="imgForm" data-aos="zoom-in-down" />
        <Form/>
      </div>
    </Contact>
    </div>
  )
}

const Contact = styled.section`
text-align: center;
margin-top:50px;

.separator{
  width: 70%;
  height: 2px;
  background-color: var(--wite-leter);
  // margin: calc(50% - 120px);
  margin: auto;
}

  h2{
    margin-top:25px;
    color:var(--wite-leter);
    width: 100%;
    text-align: center;
    font-size: 2rem ;
  }
  .info-contact{
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .imgForm{
    width: 60%;
  }

  @media (min-width: 768px) {
    .imgForm {
      width: 46%;
  }
  input {
    width: 60%;
    height: 38px;  
    }
    textarea {
      width: 60%;
    }
    button {
      width: 20%;
      margin-top: 20px;
    }
  }


  @media (min-width: 992px) {

  .info-contact{
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 80px;
  }
  .imgForm{
    width: 24%;
    height: 250px; 
    margin-left: 65px;
    margin-top:-35px;
  }

  }
`
