import React from 'react';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation'
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
    return (
        <motion.div
            initial='hidden'
            animate='show'
            exit='exit'
            variants={pageAnimation}
        >
            <AboutSection />
            <ServiceSection />
            <ScrollTop />
        </motion.div>
    )
}

export default AboutUs