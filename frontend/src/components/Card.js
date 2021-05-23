import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Card = ({ project }) => {
    return (
        <StyledCard>
            <Link to={`/portfolio/${project.slug}`}>
                <Content>
                    <Image src={project.image} />
                    <Info>
                        <h3>{project.title}</h3>
                        <h4>{project.createdAt}</h4>
                        <p>{project.description}</p>
                    </Info>
                </Content>
            </Link>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    min-height: 30vh;
    border-color: #416cd5;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid yellow;
    box-shadow: inset 0 2px 3px 0 rgba(255,255,255,.3), inset 0 -3px 6px 0 rgba(0,0,0,.2), 0 3px 2px 0 rgba(0,0,0,.2);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 70vh;

`;

const Image = styled.img`
    width: 130%;
    height: 45vh;

`;

const Info = styled.div`
    text-align: left;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
        padding-top: 2rem;
    }
`;

export default Card;