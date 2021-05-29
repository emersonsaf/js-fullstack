import React, { useState } from 'react';

import styled from 'styled-components';
import moment from 'moment';
import { save } from '../services/Sheet';
import { set } from 'mongoose';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const cleanForm = () =>{
        setName('');
        setEmail('');
        setMessage('');
    }

    const contactMeHandler = async (e)=>{
        e.preventDefault();
        const data = {
            Nome: name,
            Email: email,
            Mensagem: message,
            Data: moment().format('DD/MM/YYYY'),
        }
        const result = await save(data);

        setSuccess(!result);
        setError(result);

        cleanForm();
    }

    return (
        <Form
            onSubmit={contactMeHandler}
        >
            <Input>
                <label>Name :</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </Input>
            <Input>
                <label>E-mail :</label>
                <input
                    type='text'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </Input>
            <Input>
                <label>Message :</label>
                <textarea
                    rows='5'
                    value={message}
                    onChange={(e) => { setMessage(e.target.value) }}
                />
            </Input>
            <button type='submit'>Salvar</button>
            { success && <Alerts style={{color: 'green'}}>MENSAGEM ENVIADA COM SUCESSO</Alerts> }
            { error && <Alerts style={{color: 'red'}} >ERRO AO ENVIAR A MENSAGEM</Alerts> }
           
        </Form>
    )
}

const Input = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 60vh;
    label{
        color: white;
        padding-top: 1rem;
    }
    input{
        border: 2px solid;
        padding: 12px 20px;
        border-radius: 1%;
        width: 100%;
        height: 100%;
    }
    input:focus{

        
    }
    textarea{
        width: 100%;
        height: 150%;
        padding: 12px 20px;
        box-align: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        resize: none;
    }
    textarea:focus{

    }
`;

const Form = styled.form`
    button{
        margin-top: 1rem;
    }
`;

const Alerts = styled.h4`
   margin-top: 1rem;
`;


export default ContactForm;