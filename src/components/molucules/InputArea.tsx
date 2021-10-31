import { Button, Input } from "@material-ui/core";
import { useState, VFC } from "react";
import styled from "styled-components";

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
                    <div>ユーザー名</div>
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
    background-color: gray;
    color: white;
`;

const LoginedInputArea = styled.div`
    display: flex;
    justify-content: center;
`;

const SInput = styled(Input)`
    background-color: white;
    width: 30vw;
`;

const SButton = styled(Button)``;
