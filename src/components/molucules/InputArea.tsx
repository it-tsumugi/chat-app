import { Button, Input } from "@material-ui/core";
import { useState, VFC } from "react";
import styled from "styled-components";
import media from "../../assets/style/media";

export const InputArea: VFC = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState("");

    const login = () => {
        if (user.length === 0) {
            window.alert("ユーザー名を入力してください");
        } else {
            setIsLogin(true);
        }
    };

    return (
        <SComponentContainer>
            {isLogin ? (
                <LoginedInputArea>
                    <span>{user}</span>
                    <SInput placeholder="メッセージをどうぞ" />
                    <SButton>送信</SButton>
                </LoginedInputArea>
            ) : (
                <>
                    <SInput
                        value={user}
                        placeholder="ユーザー名を入力してください"
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <SButton onClick={login}>ログイン</SButton>
                </>
            )}
        </SComponentContainer>
    );
};

const SComponentContainer = styled.div`
    background-color: #b9d5e0;
    color: white;
`;

const LoginedInputArea = styled.div`
    display: flex;
    justify-content: center;
`;

const SUserName = styled.span``;

const SInput = styled(Input)`
    background-color: white;
    max-width: 50vw;
    border-radius: 40%;
    border: none;
`;

const SButton = styled(Button)`
    font-size: 18pt;
    margin: 5px;
    padding: 12px 12px;
    background: skyblue;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    line-height: 1em;
    opacity: 1;
    transition: 0.3s;

    border-radius: 40%;
    border: none;
    box-shadow: 4px 4px 3px gray;
    &:hover {
        box-shadow: none;
        text-decoration: none;
        color: white;
        opacity: 0.6;
    }

    font-size: 14px;
    ${media.lg`
    max-width: 100px;
    font-size: 12px;
    `}
    ${media.md`
    max-width: 60px;
    font-size: 10px;
    `}
`;
