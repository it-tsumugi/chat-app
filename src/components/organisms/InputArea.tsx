import { useState, VFC } from "react";
import styled from "styled-components";

import { DefaultButton } from "../atoms/button/DefaultButton";

import { addChat } from "../../functions/handler/addChat";
import { useLatestChatOrderSelector } from "../../store/slices/latestChatOrderSlice";
import media from "../../assets/style/media";
import { DefaultInput } from "../atoms/input/DefaultInput";

export const InputArea: VFC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [text, setText] = useState("");
  const { latestChatOrder } = useLatestChatOrderSelector();

  const login = () => {
    if (userName.length === 0) {
      window.alert("ユーザー名を入力してください");
    } else {
      setIsLogin(true);
    }
  };

  return (
    <SComponentContainer>
      {isLogin ? (
        <LoginedForm
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <SUserName>{userName}</SUserName>
          <DefaultInput
            value={text}
            placeholder="メッセージをどうぞ"
            onChange={(e) => setText(e.target.value)}
          />
          <DefaultButton
            onClick={() =>
              addChat({
                userName,
                text,
                setText,
                isLogin,
                latestChatOrder,
              })
            }
            type="submit"
          >
            送信
          </DefaultButton>
        </LoginedForm>
      ) : (
        <form>
          <DefaultInput
            value={userName}
            placeholder="ユーザー名を入力してください"
            onChange={(e) => setUserName(e.target.value)}
          />
          <DefaultButton onClick={login}>ログイン</DefaultButton>
        </form>
      )}
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  background-color: #d0e7e7;
  text-align: center;

  font-size: 16px;
  ${media.lg`
    font-size: 14px;
    `}
  ${media.md`
    font-size: 12px;
    `}
`;

const LoginedForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SUserName = styled.span`
  padding-right: 20px;
`;
