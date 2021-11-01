import { VFC } from "react";
import styled from "styled-components";
import { chatType } from "../../assets/type/dataType";

type propsType = {
    chat: chatType;
};

export const Chat: VFC<propsType> = (props) => {
    const { chat } = props;
    return (
        <SComponentContainer>
            <SUserName>{chat.user}</SUserName>
            <SText>{chat.text}</SText>
            <STime>{chat.time}</STime>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    display: grid;
    grid-template-columns: 33vw 33vw 33vw;
    grid-template-rows: 40px 25px;
    border: 2px black solid;
`;

const SUserName = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    text-align: left;
    border: 2px black solid;
`;

const SText = styled.div`
    grid-column-start: 2;
    grid-column-end: 4;
    text-align: left;
    border: 2px black solid;
`;

const STime = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;

    text-align: left;
    border: 2px black solid;
`;
