import React from 'react';
import ReactPlayer from 'react-player';
import { CardType, removeCard } from 'store/reducers/card';
import { useCard } from 'hooks/initialHooks';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { formatDistance } from 'date-fns';
import { ko } from 'date-fns/locale';
import { showForm } from 'store/reducers/form';

const CardWrapperStyle = styled.li`
        flex-basis: calc(50% - 20px);
        margin: 10px;
        list-style: none;
        background: white;
        border-radius: 10px;
        @media only screen and (max-width: 768px) {
            flex-basis: calc(100% - 20px);
        }
`

const CardStyle = styled.div`
        position: relative;
        width: 100%;
        height: 270px;
        border-radius: 10px;
        overflow: hidden;
`;

const IconWrapperStyle = styled.div`
        margin: 10px;
        display: inline-block;
        cursor: pointer;
        font-size: 14px;
        &:hover{
            color: ${props => props.color};
            path {
                fill: ${props => props.color};
            }
        }
`
const IconStyle = styled.button`
        width: 30px;
        height: 30px;
        cursor: pointer;
        background: none;
        border: 0;
        outline: none;
`;
const H3 = styled.h3`
        margin-top: 10px;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 9px;
        ${(props: { title: string }) => {
        if (!props.title) {
            return `color: rgb(200,200,200);`
        }
    }}
`
const UpdatedAt = styled.span`
        font-size: 14px;
        color: rgb(150,150,150);
        margin: 5px 0;
        display: block;
`
const Description = styled.p`
        width: 100%;
        font-size: 14px;
        ${(props: { description: string }) => {
        if (!props.description) {
            return `color: rgb(200,200,200);`
        }
    }}
`

const Content = styled.div`
        padding-left: 10px;
        box-sizing: border-box;
        margin-bottom: 10px;
`
interface VideoPlayerProps {
    card: CardType;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ card }) => {
    const [, dispatch] = useCard();
    if (!card) return null;
    const update = (card: CardType) => {
        dispatch(showForm(card));
    }
    return (
        <CardWrapperStyle>
            <Content>
                <H3 title={card.title}>{card.title ? card.title : "제목 없음"}</H3>
                <UpdatedAt>{formatDistance(new Date(card.updatedAt), new Date(), { locale: ko })}</UpdatedAt>
                <Description description={card.description}>{card.description ? card.description : "설명 없음"}</Description>
            </Content>
            <CardStyle>
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
            </CardStyle>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconWrapperStyle color='rgb(75,80,250)' onClick={() => update(card)}>
                    <IconStyle>
                        <FontAwesomeIcon icon={faEdit} size="2x" />
                    </IconStyle>
                    수정하기
                </IconWrapperStyle>
                <IconWrapperStyle color='rgb(225,60,230)' onClick={() => dispatch(removeCard(card.id))}>
                    <IconStyle>
                        <FontAwesomeIcon icon={faTrash} size="2x" />
                    </IconStyle>
                    삭제하기
                </IconWrapperStyle>
            </div>

        </CardWrapperStyle>)
};

export default VideoPlayer;
