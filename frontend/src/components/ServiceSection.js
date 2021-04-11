import React from 'react'

import styled from 'styled-components'

import { About, Description, Image } from '../styles'

const ServiceSection = () => {
    return (
        <Services>
            <Image>
                <img src="https://sites.code.education/wp-content/uploads/2019/02/Mservices.png" />
            </Image>
            <Description>
                <h2>Things I do</h2>
                <Cards>
                    <Card>
                        <div className='icon'>
                            ICONE
                        <h3>Portfolio</h3>
                        </div>
                    <p>Check my work on my portfolio</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            ICONE
                        <h3>Courses</h3>
                        </div>
                    <p>Check my work on my portfolio</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            ICONE
                        <h3>Hobbies</h3>
                        </div>
                    <p>Check my work on my portfolio</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            ICONE
                        <h3>Github</h3>
                        </div>
                    <p>Check my work on my portfolio</p>
                    </Card>
                </Cards>
            </Description>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-top: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    background: red;
    display: flex;
    flew-wrap: wrap;
    padding: 1rem;

`;

const Card = styled.div`
    background: green;
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