import React, { useState } from 'react';
import VideoPlayer from 'components/VideoPlayer';
import { Button, Form, Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import useCard from 'hooks/card';
import styled from 'styled-components';
import useForm from 'react-hook-form';
import { CardType, addCard } from 'store/reducers/card';

const FormBottomStyle = styled.div`
        position:fixed; 
        bottom:0;
        left:0;
        width:100%;
        padding:10px;
`
const FormVideoUrlStyle = styled.form`
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
`

const ContainerStyle = styled.div`
        position:relative;
        margin:0;
        padding:0;
        width:100vw;
        height:100vh;
        max-width:100vw
`
const App: React.FC = () => {
    const [state, dispatch] = useCard();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        const url_check = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        if (url_check.exec(data.url)) {
            console.log('success');
            let measure: [number, number] = [0, 0];
            if (state.cards.length > 0) {
                const lastCardMeasure = state.cards[state.cards.length - 1].measure;
                measure = [lastCardMeasure[0] + 20, lastCardMeasure[1] + 20]
            };
            dispatch(addCard(data.url, measure));
        };
    }

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="/">React-Multi-Play</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="https://flamingotiger.github.io" target='_blank'>
                        <FontAwesomeIcon icon={faGithub} color='white' />
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
            <ContainerStyle>
                {state.cards.map((card: CardType) => <VideoPlayer key={card.id} card={card} />)}
            </ContainerStyle>
            <FormBottomStyle>
                <FormVideoUrlStyle onSubmit={handleSubmit(onSubmit)}>
                    <Form.Control style={{ flex: 8 }} type="text" name="url" defaultValue="https://www.youtube.com/watch?v=RDQGPs7StNA" ref={register} autoComplete="off" placeholder="Input the video url" />
                    <Button style={{ flex: 2 }} type="submit" variant="outline-success">ADD VIDEO</Button>
                </FormVideoUrlStyle>
            </FormBottomStyle>
        </div>
    );
}

export default App;
