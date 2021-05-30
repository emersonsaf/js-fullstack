import React from 'react'
import { About, Description } from '../styles'
import styled from 'styled-components';

import { motion } from 'framer-motion';
import { pageAnimation, smileAnimation } from '../animation'
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotFound = () => {
    return (
        <About>
            <Description>
                <StyleNotFound>
                    <div>
                        <motion.h2 initial='hidden'
                            animate='show'
                            exit='exit'
                            variants={pageAnimation}
                        >
                            404
                    </motion.h2>
                        <motion.h2
                            initial='hidden'
                            animate='show'
                            exit='exit'
                            variants={pageAnimation}
                        >
                            PAGE NOT FOUNT
                    </motion.h2>
                    </div>
                    <motion.div
                        initial='hidden'
                        animate='show'
                        variants={smileAnimation}
                    >
                        < FontAwesomeIcon icon={faFrown} size='10x' color='rgb(4,211,97)' style={{ paddingRight: 10 }} />
                    </motion.div>

                </StyleNotFound>
            </Description>
        </About>
    )
}

const StyleNotFound = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export default NotFound