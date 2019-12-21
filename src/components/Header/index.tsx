import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const HeaderStyle = styled.header`
        background: linear-gradient(90deg, rgb(75,80,250), rgb(225,60,230));
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: .5rem 1rem;
`
const LinkStyle = styled.a`
        font-weight: bold;
        color: white;     
        text-decoration: none;
`

const Header:React.FC = () => {
    return <HeaderStyle>
        <LinkStyle href="/">React-Multi-Play</LinkStyle>
        <FontAwesomeIcon icon={faGithub} color='white' />
    </HeaderStyle>
}

export default Header;