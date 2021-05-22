import React from 'react';

import styled from 'styled-components';

// import { useApi } from '../hooks/userApi'

const Card = () => {
    //const { data } = useApi('/portfolio');
    return (
        <>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Info>
                        <h3>Titulo</h3>
                        <h4>data</h4>
                        <p>short description</p>
                    </Info>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Info>
                        <h3>Titulo</h3>
                        <h4>data</h4>
                        <p>short description</p>
                    </Info>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Info>
                        <h3>Titulo</h3>
                        <h4>data</h4>
                        <p>short description</p>
                    </Info>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Info>
                        <h3>Titulo</h3>
                        <h4>data</h4>
                        <p>short description</p>
                    </Info>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/4312861/pexels-photo-4312861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Info>
                        <h3>Titulo</h3>
                        <h4>data</h4>
                        <p>short description</p>
                    </Info>
                </Content>
            </StyledCard>

        </>
    )
}

const StyledCard = styled.div`
    background-color: #696969;
    min-height: 30vh;
    border-color: #416cd5;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;

`;

const Image = styled.img`
    width: 100%;
    heigh: 100%;

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