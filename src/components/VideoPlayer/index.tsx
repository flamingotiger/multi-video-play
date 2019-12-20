import React from 'react';
import { Button, Card } from "react-bootstrap";

const VideoPlayer: React.FC = () => {
    return <Card>
        <video src='https://www.youtube.com/watch?v=RDQGPs7StNA'/>
        <Card.Body>
            <Card.Title>비디오</Card.Title>
            <Card.Text> 비디오 내용 </Card.Text>
            <Button variant="primary">영상 종료하기</Button>
        </Card.Body>
    </Card>
};

export default VideoPlayer;
