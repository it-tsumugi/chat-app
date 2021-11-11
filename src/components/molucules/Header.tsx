import { VFC } from "react";
import styled from "styled-components";

import { deleteAllChats } from "../../functions/handler/deleteAllChats";
import { addSeedData } from "../../functions/handler/addSeedData";
import { MAIN_COLOR } from "../../assets/style/color";
import media from "../../assets/style/media";

export const Header: VFC = () => {
  return (
    <SComponentContainer>
      <STitle>Realtime Chat</STitle>
      <SSubTitle>React/React Redux/Firebase Realtime Database</SSubTitle>
      <SButtonArea>
        <SButton onClick={deleteAllChats}>全削除</SButton>
        <SButton onClick={addSeedData}>シードデータ</SButton>
      </SButtonArea>
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  background: linear-gradient(to left, ${MAIN_COLOR}, skyblue);
  color: white;
  text-align: center;
  position: relative;
`;

const STitle = styled.h1`
  font-size: 32px;
  margin: 0;
  ${media.lg`
    font-size: 30px;
    `}
  ${media.md`
    font-size: 28px;
    `}
`;

const SSubTitle = styled.h2`
  font-weight: normal;
  margin: 0;

  font-size: 22px;
  ${media.lg`
    font-size: 18px;
    `}
  ${media.md`
    font-size: 16px;
    `}
`;

const SButtonArea = styled.div`
  display: grid;
  grid-gap: 1px;
  position: absolute;
  top: 10px;
  right: 10px;
  max-width: 100px;
  ${media.md`
    top: 2px;
    right: 2px;
  `}
`;

const SButton = styled.button`
  font-size: 12px;
  ${media.lessThanlg`
    font-size: 10px;
    `}
`;
