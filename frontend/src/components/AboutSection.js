import React from 'react';

import { About, Description, Image } from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <h2>Emerson Filho</h2>
                <h2>Computer scientist</h2>
                <p>
                    I'm Computer scientist who is passionate about making code more accessibility.
                    creating technology to elevate people, and building community.
                    Some technologies I enjoy working with  Mongo, Express,
                    React and Node stack. I am currently work an awesome projects.
                </p>
                <button>Contact me</button>
            </Description>
            <Image>
                <img src="https://i1.wp.com/www.spacesworks.com/wp-content/uploads/2016/06/coding-in-the-classroom.png?fit=750%2C425&quality=50&ssl=1" />
            </Image>
        </About>
    )
}


export default AboutSection