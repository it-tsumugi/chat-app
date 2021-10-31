import { VFC } from "react";
import styled from "styled-components";

import { Header } from "../molucules/Header";
import { InputArea } from "../molucules/InputArea";

export const ChatPage: VFC = () => {
    return (
        <SComponentContainer>
            <Header />
            <InputArea />
            <div>chatPage</div>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    min-height: 100vh;

    text-align: center;
    width: 100vw;
    /* margin: 0 auto; */
`;
