import { VFC } from "react";
import styled from "styled-components";

export const Header: VFC = () => {
    return (
        <SComponentContainer>
            <h1 style={{ margin: "0" }}>Header</h1>
            <h2 style={{ margin: "0" }}>
                React/React Redux/Firebase Realtime Database
            </h2>
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    background-color: skyblue;
    color: white;
`;
