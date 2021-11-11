import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import moment from "moment";

import { CircularProgress } from "@material-ui/core";

import { useChatDataSelector } from "../../store/slices/chatDataSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { loadMore } from "../../functions/handler/loadMore";
import { useIsChatsCompletedSelector } from "../../store/slices/isChatsCompletedSlice";
import { useHasMoreSelector } from "../../store/slices/hasMoreSlice";
import { useLastChatOrderSelector } from "../../store/slices/lastChatOrderSlice";
import { MAIN_COLOR } from "../../assets/style/color";
import media from "../../assets/style/media";

export const ChatDisplayArea = () => {
  const { chatData } = useChatDataSelector();
  const { hasMore } = useHasMoreSelector();
  const { isChatsCompleted } = useIsChatsCompletedSelector();
  const { lastChatOrder } = useLastChatOrderSelector();
  const { dispatch } = useAppDispatch();

  return (
    <SComponentContainer>
      {isChatsCompleted ? (
        <InfiniteScroll
          loadMore={() =>
            loadMore({
              dispatch,
              chatData,
              lastChatOrder,
              hasMore,
            })
          }
          hasMore={hasMore}
          loader={<SCircularProgress key={0} />}
          initialLoad={false}
          threshold={50}
        >
          {chatData.length === 0 ? (
            <span>チャットが存在しません</span>
          ) : (
            chatData.map((item) => {
              return (
                <SChatContainer key={item.key}>
                  <SUserName>{item.user_name}</SUserName>
                  <SText>{item.text}</SText>
                  <STime>{moment(item.createdAt).fromNow()}</STime>
                </SChatContainer>
              );
            })
          )}
        </InfiniteScroll>
      ) : (
        <SCircularProgress />
      )}
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  justify-content: center;
  margin: 5px;
  text-align: center;
  font-size: 16px;
  ${media.lg`
    font-size: 14px;
    `}
  ${media.md`
    font-size: 12px;
    `}
`;

const SChatContainer = styled.div`
  display: grid;
  align-items: center;
  text-align: left;
  border-bottom: 2px #cecece solid;
  grid-template-rows: 40px 25px;
  grid-template-columns: 30vw 40vw 20vw;
`;

const SUserName = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  font-weight: bold;
`;

const SText = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
`;

const STime = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  color: gray;
`;

const SCircularProgress = styled(CircularProgress)`
  color: ${MAIN_COLOR};
`;
