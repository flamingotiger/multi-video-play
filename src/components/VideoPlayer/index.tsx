import React from 'react';
import { Button, Card } from "react-bootstrap";
import ReactPlayer from 'react-player';

const VideoPlayer: React.FC = () => {
    return (<Card>
        <Card.Body>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=RDQGPs7StNA"
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
            <Button variant="primary">영상카드닫기</Button>
        </Card.Body>
    </Card>)
};

export default VideoPlayer;
