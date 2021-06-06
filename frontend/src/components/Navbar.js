import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { LogoutButton } from '../components/auth/Authentication';

import Userfront from "@userfront/react";

Userfront.init("pn45vpby");


const Navbar = () => {
    const menuOptions = {
        about: '<About Me />',
        portfolio: '<Portfolio />',
        contact: '<Contact Me />',
        cadastro: 'Cadastro',
        logar: 'Logar'
    }

    return (
        <StyledNav>
            <h1><Link to='/'>Emerson Filho</Link></h1>
            <ul>
                <li><Link to='/'>{menuOptions.about} </Link></li>
                <li><Link to='/portfolio'>{menuOptions.portfolio}</Link></li>
                <li><Link to='/contate-me'>{menuOptions.contact}</Link></li>
                {
                    !Userfront.accessToken() && (
                        <>
                            <li><Link to='/logar'>{menuOptions.logar}</Link></li>
                            <li><Link to='/cadastrar' >{menuOptions.cadastro}</Link></li>
                        </>
                    )
                }
                {
                    Userfront.accessToken() && <li><LogoutButton /></li>
                }

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
    top:0;
    z-index: 20;
    ul{
        display:flex;
        list-style: none;
    }
    li{
        padding-left: 5rem;
    }
    a{
        color: white;
        text-decoration: none;
    }
    LogoutButton{
        size: 1rem
    }
`;

export default Navbar;