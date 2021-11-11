import { VFC } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ja";

import { Header } from "../molucules/Header";
import { InputArea } from "../organisms/InputArea";
import { ChatDisplayArea } from "../organisms/ChatDisplayArea";

import { useFetchData } from "../../hooks/useFetchData";

export const ChatPage: VFC = () => {
  moment.locale("ja");

  //初回時のみ実行
  useFetchData();

  return (
    <SComponentContainer>
      <Header />
      <InputArea />
      <ChatDisplayArea />
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  min-height: 100vh;
`;
