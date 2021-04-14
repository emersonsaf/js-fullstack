import React from 'react'

import styled from 'styled-components'

import { About, Description, Image } from '../styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faImage, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const ServiceSection = () => {
    return (
        <Services>
            <Image>
                <img src="https://sites.code.education/wp-content/uploads/2019/02/Mservices.png" />
            </Image>
            <ServiceDescription>
                <h2>Things I do</h2>
                <Cards>
                    <Card>
                        <div className='icon'>
                        < FontAwesomeIcon icon={faLaptopCode} size='4x'/>
                        <h3>Portfolio</h3>
                        </div>
                        <p>Check my work on my portfolio</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                        < FontAwesomeIcon icon={faGraduationCap} size='4x'/>
                        <h3>Courses</h3>
                        </div>
                        <p>Check my work on my portfolio</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                        < FontAwesomeIcon icon={faImage} size='4x'/>
                        <h3>Hobbies</h3>
                        </div>
                        <p>Check my work on my portfolio</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            < FontAwesomeIcon icon={faGithubSquare} size='4x'/>
                            <h3>Github</h3>
                        </div>
                        <p>Check my work on my portfolio</p>
                    </Card>
                </Cards>
            </ServiceDescription>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-top: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;

`;

const ServiceDescription = styled(Description)`
    flex: 2;
`;

const Card = styled.div`
    padding: 0.5rem;
    flex-basis: 20rem;
    .icon{
        display: flex;
        aling-items: center;
    }
    h3{
        margin-left: 1rem;
        background-color: white;
        color: black;
        padding: 1rem;
    }
`;

export default ServiceSection