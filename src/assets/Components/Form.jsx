import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styled from "styled-components"
import '../../index.css';
import imgAdd from '../../img/enviar.png';
import Swal from 'sweetalert2'

export const Form = () => {
    const form = useRef();
    const [resetForm, setResetForm] = useState(form);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cbtv2fl', 'template_9llykgw', form.current, 'jdU4LOKB06uQM1bX9')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Gracias por contactarme ',
                    showConfirmButton: false,
                    timer: 1500
                })
                setResetForm(resetForm.reset())
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <FormCont>
            <form ref={form} onSubmit={sendEmail} id="contac">
                <input type="text" placeholder="Nombre" name="user_name" required />
                <input type="email" placeholder="Correo" name="user_email" required>
                </input>
                <textarea rows="7" cols="50" placeholder="Mensaje" name="message" required></textarea>
                <button type='submit'><img src={imgAdd} alt="" /> <p>Enviar</p> </button>
            </form>
        </FormCont>
    )
}

const FormCont = styled.div`
text-align: center;
margin:0;
color: var(--wite-leter);
width: 50% ;
padding: 2px;
width: 90%;

#contac{
    display: block;
    color: var(--wite-leter);
}

input{
width: 90% ;
height: 40px ;
margin:10px;
background-color: var(--vectores-gray);
color: var(--wite-leter);
text-align: center;
}
textarea{
    width: 90% ;
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

    p{
        color: var(--wite-leter);
        display:none;
    }

}
button:hover{
    img{
        display: none;
    }
    p{
        display:block;
        font-size: 15px;
    }
}
img{
    width: 40% ;
    height: 30px;
    margin-top:-5px
}

@media (min-width: 992px) {
    width: 60%;

    input{
        width: 50% ;
        height: 40px ;
    }

    textarea{
        width: 50%;
    }

    img{
        width: 30% ;
    }

    button{
        margin-top:20px;
        width: 20% ;    
    }
}


`
