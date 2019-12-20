import React from 'react';
import { Button, Card } from "react-bootstrap";
import ReactPlayer from 'react-player';
import { CardType, removeCard } from 'store/reducers/card';
import useCard from 'hooks/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface VideoPlayerProps {
    card: CardType;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ card }) => {
    const [, dispatch] = useCard();
    return (<Card style={{position:'absolute'}}>
        <Card.Header>
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
            <Button variant="primary" onClick={() => dispatch(removeCard(card.id))}>CLOSE VIDEO</Button>
        </Card.Body>
    </Card>)
};

export default VideoPlayer;
