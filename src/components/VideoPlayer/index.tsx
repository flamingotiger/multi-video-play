import React from 'react';
import ReactPlayer from 'react-player';
import { CardType, removeCard } from 'store/reducers/card';
import useCard from 'hooks/card';
import styled from 'styled-components';

const CardWrapperStyle = styled.li`
        flex-basis: calc(50% - 40px);
        margin: 10px;
        list-style: none;
`

const CardStyle = styled.div`
        position: relative;
        width: 100%;
        height: 270px;
        border-radius: 10px;
        overflow: hidden;
`;

const Button = styled.button`
        background: none;
        border: 0;
        color: rgb(50,50,50);
        font-weight: bold;
        border-radius: 10px;
`;

interface VideoPlayerProps {
    card: CardType;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ card }) => {
    const [, dispatch] = useCard();
    if (!card) return null;

    return (
        <CardWrapperStyle>
            <div>
                <Button onClick={() => dispatch(removeCard(card.id))}>영상 삭제하기</Button>
            </div>
            <CardStyle>
                <ReactPlayer
                    url={card.url}
                    controls={true}
                    width='100%'
                    height='100%'
                    allowFullScreen
                    config={{
                        youtube: {
                            playerVars: { rel: 0, modestbranding: 0, origin: 1 },
                        },
                    }}
                />

            </CardStyle>
        </CardWrapperStyle>)
};

export default VideoPlayer;
