import React from 'react';

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Navbar = () => {
    const menuOptions = {
        about: '<About Me />',
        portfolio: '<Portfolio />',
        contact: '<Contact Me />'
    }

    return (
        <StyledNav>
            <h1><Link to='/'>Emerson Filho</Link></h1>
            <ul>
                <li><Link to='/'>{menuOptions.about} </Link></li>
                <li><Link to='/portfolio'>{menuOptions.portfolio}</Link></li>
                <li><Link to='/contate-me'>{menuOptions.contact}</Link></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10 vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
   

    ul{
        display:flex;
        list-style: none;
    }
    li{
        padding-left: 10rem;
    }
    a{
        color: white;
        text-decoration: none;
    }
`;

export default Navbar;