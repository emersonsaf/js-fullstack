import React from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components'

import PortfolioList from '../components/admin/PortfolioList';

const Admin = () => {
    return (
        <Table>
            <Jumbotron>
                <h1>Administrator Painel</h1>
            </Jumbotron>
            <StyledTabs>
                <Tabs style={{ backgroundColor: 'white' }} defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <h1>Wellcome Home</h1>
                    </Tab>
                    <Tab eventKey="portfolio" title="Portfolio">
                        <PortfolioList />
                    </Tab>
                    <Tab eventKey="technologies" title="Technologies" >
                        <h1>Lista de Tecnologias</h1>
                    </Tab>
                </Tabs>
            </StyledTabs>
        </Table>
    )
}

const Table = styled.div`
padding: 1rem;
    width: 80%;
    min-height: 80vh;
    background: white;
    position: absolute;
    border-radius: 1rem;
    left: 10%;
    top: 1%;
    margin-bottom: 10%;
    z-index: 10;
`;

const StyledTabs = styled.div`
    margin-top: 3rem;
h1{
    padding: 1rem;
    margin-top: 2rem;
    background-color: 'red';
   }
`;

export default Admin;