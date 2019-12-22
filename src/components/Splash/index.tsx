import React from 'react';
import styled, { keyframes } from 'styled-components';
import splashImage from 'assets/splash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { startSplash, SplashState } from 'store/reducers/splash';
import useSplash from 'hooks/splash';

const duplicateStyle = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 0.5s;
`

const keyframesIcon = keyframes`
    0%{
        transform: translateX(0);   
    }
    100%{
        transform: translateX(10px);
    }
`

const AnimIcon = styled.div`
    animation-name: ${keyframesIcon};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
     cursor:pointer;
`
const SplashStyle = styled.div`
        ${duplicateStyle}
        background: url(${splashImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 9997;
        ${(props: SplashState) => {
        if (!props.isSplash) {
            return `left: 100%`
        }
    }}
`;
const SplashBlurStyle = styled.div`
       ${duplicateStyle}
        background: rgba(0,0,0,0.5);
        z-index: 9998;
        ${(props: SplashState) => {
        if (!props.isSplash) {
            return `left: 100%`
        }
    }}
`
const SplashBodyStyle = styled.div`
        ${duplicateStyle}
        z-index: 9999;
        display: flex;
        align-items: flex-end;
        ${(props: SplashState) => {
        if (!props.isSplash) {
            return `left: 100%`
        }
    }}
`
const ContentWrapperStyle = styled.div`
        display: flex;
        width: 100%;
        height: 200px;
        justify-content: space-around;
        align-items: center;
`

const H1 = styled.h1`
    font-size: 24px;
    color: white;
`
const H2 = styled.h2`
    font-size: 18px;
    color: white;
`
const Splash = () => {
    const [state, dispatch] = useSplash();
    return (
        <>
            <SplashBlurStyle isSplash={state.isSplash} />
            <SplashStyle isSplash={state.isSplash} />
            <SplashBodyStyle isSplash={state.isSplash}>
                <ContentWrapperStyle>
                    <div>
                        <H1>Muli Player</H1>
                        <H2>여러개의 영상을 한번에 볼수 있습니다.</H2>
                    </div>
                    <AnimIcon>
                        <FontAwesomeIcon icon={faArrowRight} color="white" size="7x" onClick={() => dispatch(startSplash())} />
                    </AnimIcon>
                </ContentWrapperStyle>
            </SplashBodyStyle>
        </>)
}

export default Splash;