import React from 'react';
import styled from 'styled-components';

import ContactForm from '../components/ContactForm';
import SocialNetwork from '../components/SocialNetwork'

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation'

const ContactMe = () => {
    return (
        <ContactStyled
            initial='hidden'
            animate='show'
            exit='exit'
            variants={pageAnimation}
        >
            <Title>
                <h2>Get in touch!!</h2>
            </Title>
            <Areas>
                <ContactForm />
                <SocialNetwork />
            </Areas>
        </ContactStyled>
    )
}

const ContactStyled = styled(motion.div)`
    padding: 1rem 10rem;
    min-height: 90hv;
`;

const Title = styled.div`
    margin-bottom: 4rem;
    h2{
        color: rgb(4, 211, 97);
    }
`;

const Areas = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between
`;

export default ContactMe;