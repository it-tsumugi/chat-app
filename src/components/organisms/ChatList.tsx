import { VFC } from "react";

import { Chat } from "../molucules/Chat";

import { chatData } from "../../assets/data/chatData";
import styled from "styled-components";

export const ChatList: VFC = () => {
    return (
        <SComponentContainer>
            {chatData.map((chat) => {
                return <Chat key={chat.id} chat={chat} />;
            })}
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
