import React from 'react';
import VideoPlayer from 'components/VideoPlayer';
import useCard from 'hooks/card';
import styled from 'styled-components';
import { CardType } from 'store/reducers/card';
import Header from 'components/Header';
import VideoPostForm from 'components/VideoPostForm';
import Splash from 'components/Splash';

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
`
const ContainerHeadStyle = styled.h2`
        font-size: 24px;
        margin: 10px 20px 0 20px;
        font-weight: bold;
        padding: 0;
`
const App: React.FC = () => {
    const [state] = useCard();
    return (
        <AppStyle>
            <Splash />
            <Header />
            <ContainerHeadStyle>내 비디오 리스트</ContainerHeadStyle>
            <ContainerStyle>
                {state.cards.map((card: CardType) => <VideoPlayer key={card.id} card={card} />)}
            </ContainerStyle>
           <VideoPostForm />
        </AppStyle>
    );
}

export default App;
