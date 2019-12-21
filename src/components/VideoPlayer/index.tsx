import React, { useState, useEffect } from 'react';
import { Button, Card } from "react-bootstrap";
import ReactPlayer from 'react-player';
import { CardType, removeCard, moveCard } from 'store/reducers/card';
import useCard from 'hooks/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface VideoPlayerProps {
    card: CardType;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ card }) => {
    const [dragging, setDragging] = useState<boolean>(false);
    const [, dispatch] = useCard();
    if (!card) return null;
    
    const mouseMove = (e: React.MouseEvent) => {
        if (dragging) {
            console.log('??')
            const rect: ClientRect = e.currentTarget.getBoundingClientRect();
            dispatch(moveCard(card.id, [e.pageX - rect.width / 2, e.pageY - rect.height / 2]));
        }
    }

    return (<Card style={{
        position: 'fixed', left: `${card.measure[0]}px`, top: `${card.measure[1]}px`, zIndex:1021
    }}>
        <Card.Header 
            onMouseDown={() => setDragging(true)} 
            onMouseMove={(e: React.MouseEvent) => mouseMove(e)} 
            onMouseUp={() => setDragging(false)}
            >
            <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={() => dispatch(removeCard(card.id))} size="lg" icon={faTimes} />
        </Card.Header>
        <Card.Body>
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
        </Card.Body>
    </Card>)
};

export default VideoPlayer;
