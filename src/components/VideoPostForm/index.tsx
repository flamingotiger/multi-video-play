import React from 'react';
import styled from 'styled-components';
import useCard from 'hooks/card';
import useForm from 'react-hook-form';
import { addCard } from 'store/reducers/card';

const FormPostStyle = styled.div`
        position: fixed; 
        bottom: -470px;
        left: 50%;
        margin-left: -200px;
        width: 400px;
        height: 500px;
        transition: 200ms;
        box-sizing:border-box;
        &:hover{
            bottom:0;
        }
        background:none;
`

const FormHeadStyle = styled.h2`
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
`
const FormVideoUrlStyle = styled.form`
        width: 100%;
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
        cursour: pointer;
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
        boder-radius: 5px;
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

    const onSubmit = (data: any) => {
        const url_check = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        if (url_check.exec(data.url)) {
            console.log('success');
            dispatch(addCard(data.url, data.title, data.description));
        };
    }
    return <FormPostStyle>
        <FormVideoUrlStyle onSubmit={handleSubmit(onSubmit)}>
            <FormHeadStyle>비디오영상 추가하기</FormHeadStyle>
            <FormLabel>Video url</FormLabel>
            <FormInput type="text" name="url" defaultValue="https://www.youtube.com/watch?v=RDQGPs7StNA" ref={register} autoComplete="off" placeholder="Youtube URL을 입력해주세요" />
            <FormLabel>Title</FormLabel>
            <FormInput type="text" name="title" ref={register} autoComplete="off" placeholder="제목을 입력해주세요" />
            <FormLabel>Description</FormLabel>
            <FormInput type="text" name="description" ref={register} autoComplete="off" placeholder="설명을 입력해주세요" />
            <FormButtonStyle type="submit">추가하기</FormButtonStyle>
        </FormVideoUrlStyle>
    </FormPostStyle>
};

export default VideoPostForm;
