import React from 'react';
import styled from 'styled-components';
import useCard from 'hooks/card';
import useForm from 'react-hook-form';
import { addCard } from 'store/reducers/card';

const FormBottomStyle = styled.div`
        position: fixed; 
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px;
        background: white;
        border-radius: 10px;
`
const FormVideoUrlStyle = styled.form`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
`
const FormButtonStyle = styled.button`
        transition: 500ms;
        padding:10px;
        color: rgb(225,60,230);
        cursour: pointer;
        background: white;
        border: 1px solid rgb(225,60,230);
        font-weight: bold;
        border-radius: 5px;
        margin-left:10px;   

        &:hover {
            background: rgb(225,60,230);
            border: 1px solid rgb(255,255,255);
            color: white;
        } 
`

const FormInput = styled.input`
        height: 100%;
        padding: 10px;
`
const VideoPostForm: React.FC = () => {
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
    return <FormBottomStyle>
        <FormVideoUrlStyle onSubmit={handleSubmit(onSubmit)}>
            <FormInput style={{ flex: 8 }} type="text" name="url" defaultValue="https://www.youtube.com/watch?v=RDQGPs7StNA" ref={register} autoComplete="off" placeholder="URL을 입력해주세요" />
            <FormButtonStyle style={{ flex: 2 }} type="submit">비디오 추가하기</FormButtonStyle>
        </FormVideoUrlStyle>
    </FormBottomStyle>
};

export default VideoPostForm;
