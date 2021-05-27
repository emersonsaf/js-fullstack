import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import { useApi } from '../hooks/userApi';
import PortfolioDetail from '../components/PortfolioDetail';

const Portfolio = () => {
    const location = useLocation();
    const slug = location.pathname.split('/')[2];
    const { data } = useApi('/portfolio');

    return (
        <PortfolioList>

            { slug && <PortfolioDetail slug={slug} />}
            
            <CardList>
                {data?.data?.map((project) => {
                    return (
                        <Card project={project} key={project.slug} />
                    )
                })}
            </CardList>
        </PortfolioList>
    )
}

const PortfolioList = styled.div`
        min-height: 90vh;
        overflow: hidden;
        padding: 5rem 10rem;
`;

const CardList = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
        grid-column-gap: 3rem;
        grid-row-gap: 5rem;
       
`;



export default Portfolio;