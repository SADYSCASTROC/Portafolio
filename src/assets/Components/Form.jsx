import styled from "styled-components"
import '../../index.css';
import imgAdd from'../../img/enviar.png';

export const Form = () => {
  return (
    <FormCont>
        <form action="" id="contac">
            <input type="text" placeholder="Nombre" />
            <input type="email"
             pattern=".+@globex\.com"  required 
             placeholder="Correo">
             </input>
            <textarea name="textarea" rows="7" cols="50" placeholder="Mensaje"></textarea>
            <button><img src={imgAdd} alt="" /></button>
        </form>
    </FormCont>
  )
}

const FormCont = styled.div`
text-align: center;
margin:0;
color: var(--wite-leter);

#contac{
    display: block;
    color: var(--wite-leter);

   
}
input{
width: 70% ;
height: 40px ;
margin:10px;
background-color: var(--vectores-gray);
color: var(--wite-leter);
text-align: center;

}
textarea{
    width: 70% ;
    background-color: var(--vectores-gray);
    color: var(--wite-leter);
    text-align: center;
}
button{
    margin-top:10px;
    display: block;
    margin:auto;
    width: 30% ;
    height: 30px ;
    background-color: var(--vectores-gray);
    border: 2px solid #FF00FF;

}
img{
    width: 40% ;
    height: 30px;
    margin-top:-5px
}

`
