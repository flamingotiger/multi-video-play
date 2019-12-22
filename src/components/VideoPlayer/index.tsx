import React from 'react';
import ReactPlayer from 'react-player';
import { CardType, removeCard } from 'store/reducers/card';
import useCard from 'hooks/card';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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

const IconStyle = styled.button`
        width: 30px;
        height: 30px;
        cursor: pointer;
        background: none;
        border: 0;
        outline: none;
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
                <IconStyle>
                    <FontAwesomeIcon icon={faTrash} size="2x" onClick={() => dispatch(removeCard(card.id))} />
                </IconStyle>
                <div>
                    {card.title && <h3>{card.title}</h3>}
                    {card.description && <div>{card.description}</div>}
                </div>
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
