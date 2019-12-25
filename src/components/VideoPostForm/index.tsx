import React from 'react';
import styled from 'styled-components';
import { useCard, useCardForm } from 'hooks/initialHooks';
import useForm from 'react-hook-form';
import { addCard, updateCard } from 'store/reducers/card';
import { hideForm } from 'store/reducers/form';

const FormPostStyle = styled.div`
        position: fixed; 
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing:border-box;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
`

const FormHeadStyle = styled.h2`
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
`
const FormVideoWrapperStyle = styled.form`
        width: 100%;
        max-width: 500px;
        padding: 40px;
        box-sizing: border-box;
        background: white;
        border-radius: 10px;
`
const FormButtonStyle = styled.button`
        transition: 500ms;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        color: white;
        background: linear-gradient(90deg, rgb(75,80,250), rgb(225,60,230));
        border: none;
        font-weight: bold;
        font-size: 18px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
`

const FormInput = styled.input`
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 12px;
        font-size: 14px;
        box-sizing: border-box;
        border-left: 0;
        border-right: 0;
        border-bottom: 1px solid rgb(240,240,240);
        border-top: 0;
        outline: none;
        transition: 500ms;
        &:focus {
            border-bottom: 1px solid rgb(75,80,250);
        }
`
const FormLabel = styled.label`
        font-size: 12px;
        text-align: left;
        margin-bottom: 4px;
        display: block;
`

const VideoPostForm: React.FC = () => {
    const [, dispatch] = useCard();
    const { register, handleSubmit } = useForm();
    const [state] = useCardForm();

    const onSubmit = (data: any) => {
        // eslint-disable-next-line no-useless-escape
        const url_check = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        if (url_check.exec(data.url)) {
            if(state.card){
                dispatch(updateCard(state.card.id, data.url, data.title, data.description));
            }else{
                dispatch(addCard(data.url, data.title, data.description));
            }
            
            dispatch(hideForm());
        };
    }
    return <FormPostStyle>
        <FormVideoWrapperStyle onSubmit={handleSubmit(onSubmit)}>
            <FormHeadStyle>비디오영상 추가하기</FormHeadStyle>
            <FormLabel>비디오 URL</FormLabel>
            <FormInput 
                    type="text" 
                    name="url" 
                    defaultValue={state.card && state.card.url ? state.card.url : ''} 
                    ref={register} 
                    autoComplete="off" 
                    placeholder="Youtube URL을 입력해주세요" />
            <FormLabel>타이틀</FormLabel>
            <FormInput 
                    type="text" 
                    name="title" 
                    defaultValue={state.card && state.card.title ? state.card.title : ''}
                    ref={register} 
                    autoComplete="off" 
                    placeholder="제목을 입력해주세요" />
            <FormLabel>설명</FormLabel>
            <FormInput 
                    type="text" 
                    name="description" 
                    defaultValue={state.card && state.card.description ? state.card.description : ''}
                    ref={register} 
                    autoComplete="off" 
                    placeholder="설명을 입력해주세요" />
            <FormButtonStyle type="submit">{state.card ? "수정하기" : "추가하기"}</FormButtonStyle>
        </FormVideoWrapperStyle>
    </FormPostStyle>
};

export default VideoPostForm;
