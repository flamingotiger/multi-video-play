import React from 'react';
import VideoPlayer from 'components/VideoPlayer';
import useCard from 'hooks/card';
import styled from 'styled-components';
import { CardType } from 'store/reducers/card';
import Header from 'components/Header';
import VideoPostForm from 'components/VideoPostForm';

const ContainerStyle = styled.ul`
        display: flex;
        flex-wrap: wrap;
        position: relative;
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        max-width: 100vw
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
        <div className="App">
            <Header />
            <ContainerHeadStyle>비디오 리스트</ContainerHeadStyle>
            <ContainerStyle>
                {state.cards.map((card: CardType) => <VideoPlayer key={card.id} card={card} />)}
            </ContainerStyle>
           <VideoPostForm />
        </div>
    );
}

export default App;
