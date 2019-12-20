import React from 'react';
import VideoPlayer from 'components/VideoPlayer';
import { Button, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="/">React-Multi-Play</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="https://flamingotiger.github.io" target='_blank'>
                        <FontAwesomeIcon icon={faGithub} color='white'/>
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
            <VideoPlayer/>
            <Button variant="outline-success">영상윈도우 추가</Button>
        </div>
    );
}

export default App;
