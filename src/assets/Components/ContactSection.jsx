import styled from "styled-components";
import '../../index.css';
import imgForm from '../../img/mdi_user-card-details-outline.png';
import { Form } from "./Form";

export const ContactSection = () => {
  return (
    <Contact>
      <h2>Contacto</h2>
      <div className="separator animate__bounceOut"></div>
      <div className="info-contact">
        <img src={imgForm} alt="" className="imgForm" />
        <Form/>
      </div>
    </Contact>
  )
}

const Contact = styled.section`
text-align: center;

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
  .imgForm{
    width: 50%;
  }
}
`
