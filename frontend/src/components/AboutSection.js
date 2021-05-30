import React from 'react';
import { useHistory } from 'react-router-dom';

import { About, Description, Image } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation, scrollReview } from '../../src/animation';

import { useScroll } from '../hooks/useScroll'


const AboutSection = () => {
    const history = useHistory();
    const [element, controls] = useScroll();

    const handdleButton = () => {
        history.push('/contate-me');
    }

    return (
        <About
            variants={scrollReview}
            animate={controls}
            initial='hidden'
            ref={element}
        >
            <Description>
                <motion.h2 variants={titleAnimation}>Emerson Filho</motion.h2>
                <motion.h2 variants={titleAnimation}>Computer scientist</motion.h2>
                <motion.p variants={fade}>
                    I'm Computer scientist who is passionate about making code more accessibility.
                    creating technology to elevate people, and building community.
                    Some technologies I enjoy working with  Mongo, Express,
                    React and Node stack. I am currently work an awesome projects.
                </motion.p>
                <button onClick={handdleButton}>Contact me</button>
            </Description>
            <Image>
                <motion.div variants={photoAnimation}>
                    <img src="https://i1.wp.com/www.spacesworks.com/wp-content/uploads/2016/06/coding-in-the-classroom.png?fit=750%2C425&quality=50&ssl=1" />
                </motion.div>
            </Image>
        </About>
    )
}


export default AboutSection