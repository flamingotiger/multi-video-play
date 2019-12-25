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
        padding: 1.2rem 1rem;
`
const LinkStyle = styled.a`
        font-weight: bold;
        font-size: 22px;
        color: white;     
        text-decoration: none;
`
const HeaderIcon = styled.div`
        cursor: pointer;
        display: inline-block;
`

const Header: React.FC = () => {
    return <HeaderStyle>
        <LinkStyle href="https://flamingotiger.github.io/multi-video-play/">Multi Player</LinkStyle>
        <HeaderIcon>
            <FontAwesomeIcon icon={faGithub} color='white' />
        </HeaderIcon>
    </HeaderStyle>
}

export default Header;