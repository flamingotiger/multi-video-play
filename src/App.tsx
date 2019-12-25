import React from 'react';
import VideoPlayer from 'components/VideoPlayer';
import useCard from 'hooks/card';
import useSplash from 'hooks/splash';
import styled from 'styled-components';
import { CardType } from 'store/reducers/card';
import Header from 'components/Header';
import VideoPostForm from 'components/VideoPostForm';
import Splash from 'components/Splash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileVideo, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { showForm, hideForm } from 'store/reducers/form';
import { RootState } from 'store/reducers';

const AppStyle = styled.section`
        position:relative;
        background-color: rgb(240,240,240);
        width: 100%;
        height: 100%;
`
const ContainerStyle = styled.ul`
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
`
const ContainerHeadStyle = styled.h2`
        font-size: 24px;
        margin: 10px 20px 0 20px;
        font-weight: bold;
        padding: 0;
`

const CardButton = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: fixed;
        background: linear-gradient(90deg, rgb(75,80,250), rgb(225,60,230));
        right: 20px;
        bottom: 20px;
        cursor: pointer;
        transition: 0.2s;
        &:hover{
            transform: translateY(-10px);   
        }
`
const App: React.FC = () => {
    const [state] = useCard();
    const [splashState] = useSplash();
    const formState = useSelector((state: RootState) => state.form);
    const dispatch = useDispatch();
    return (
        <AppStyle>
            <Splash />
            {!splashState.isSplash && <>
                <Header />
                <ContainerHeadStyle>내 비디오 리스트</ContainerHeadStyle>
                <ContainerStyle>
                    {state.cards.map((card: CardType) => <VideoPlayer key={card.id} card={card} />)}
                </ContainerStyle>
                {formState.isForm && <VideoPostForm />}
                <CardButton onClick={() => dispatch(formState.isForm ? hideForm() : showForm())}>
                    <FontAwesomeIcon icon={formState.isForm ? faTimes : faFileVideo} color="#fff" size="lg" />
                </CardButton>
            </>}
        </AppStyle>
    );
}

export default App;
