import React from 'react';

import styled from 'styled-components';

import { faGithubSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

import { iconsSocial, iconsSocialLeft } from '../animation'

const SocialNetwork = () => {
    return (
        <Network>
            <motion.div
                initial='hidden'
                animate='show'
                variants={iconsSocial}
            >
                <Social href="http://www.github.com/emersonsaf" target='_blank'>
                    < FontAwesomeIcon icon={faGithubSquare} size='4x' color='white' style={{ paddingRight: 10 }} />
                    <h3>Github</h3>
                </Social>
            </motion.div>
            <motion.div
                initial='hidden'
                animate='show'
                variants={iconsSocialLeft}
            >
                <Social href="https://www.linkedin.com/in/emerson-filho-23291b103/" target='_blank'>
                    < FontAwesomeIcon icon={faLinkedin} size='4x' color='#0a66c2' style={{ paddingRight: 10 }} />
                    <h3>Linkedin</h3>
                </Social>
            </motion.div>
            <motion.div
                initial='hidden'
                animate='show'
                variants={iconsSocial}
            >
                <Social href="http://www.instagram.com/emersonfifilho" target='_blank'>
                    < FontAwesomeIcon icon={faInstagram} size='4x' color='purple' style={{ paddingRight: 10 }} />
                    <h3>Instagram</h3>
                </Social>

            </motion.div>
        </Network>
    )
}


const Network = styled.div`
    padding: 1rem 5rem;
`;

const Social = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px 50px;
    padding-left: 2rem ;
    text-decoration: none;
    &:hover{
        background: rgb(4, 211, 97);
        cursos: pointer;
    }
    &:hover h3{
        color: black
    }
    h3{
        color: gray;
        margin: 2rem;
    }
`;

export default SocialNetwork