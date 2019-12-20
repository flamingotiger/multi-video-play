import React from 'react';
import VideoPlayer from 'components/VideoPlayer';
import { Button } from "react-bootstrap";

const App: React.FC = () => {
    return (
        <div className="App">
            <VideoPlayer/>
            <Button>영상윈도우 추가</Button>
        </div>
    );
}

export default App;
