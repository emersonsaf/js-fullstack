import React from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components'

import PortfolioList from '../components/admin/PortfolioList';
import WellcomeTab from '../components/admin/WellcomeTab';

import { Redirect } from 'react-router-dom';

import Userfront from '@userfront/react'

import jwt_decode from 'jwt-decode'

Userfront.init("pn45vpby");

const Admin = ({ location }) => {
    if (!Userfront.accessToken()) {
        return (<Redirect to={{
            pathname: '/logar',
            state: { from: location }
        }} />
        )
    }

    const accessData = jwt_decode(Userfront.accessToken())
    const userData = jwt_decode(Userfront.idToken())

    const access = JSON.stringify(accessData)
    const user = JSON.stringify(userData)

    return (
        <Table>
            <Jumbotron>
                <h1>Painel Administrator</h1>
            </Jumbotron>
            <StyledTabs>
                <Tabs style={{ backgroundColor: 'white' }} defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" defaultActiveKey='home' title="Home">
                        <WellcomeTab />
                    </Tab>
                    <Tab eventKey="portfolio" title="Portfolio">
                        <PortfolioList />
                    </Tab>
                    <Tab eventKey="technologies" title="Technologies" >
                        <h1>Lista de Tecnologias</h1>
                    </Tab>
                    <Tab eventKey="user" title="User">
                        <p>User</p>
                        <p>{access}</p>
                        <p>{user}</p>
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