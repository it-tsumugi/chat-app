import { VFC } from "react";
import styled from "styled-components";

import { Header } from "../molucules/Header";
import { InputArea } from "../molucules/InputArea";
import { ChatList } from "../organisms/ChatList";

export const ChatPage: VFC = () => {
    return (
        <SComponentContainer>
            <Header />
            <InputArea />
            <ChatList />
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    min-height: 100vh;
    text-align: center;
    background-color: #eee;
`;
