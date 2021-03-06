import {
  query,
  limitToLast,
  Query,
  onValue,
  endBefore,
  orderByChild,
} from "firebase/database";

import { chatRef } from "../..";
import { chatDataType } from "../../assets/type/dataType";
import { AppDispatch } from "../../assets/type/reduxType";
import { setChatData } from "../../store/slices/chatDataSlice";
import { convertChatData } from "../features/chatData/convertChatData";
import { setHasMore } from "../../store/slices/hasMoreSlice";
import { setLastChatOrder } from "../../store/slices/lastChatOrderSlice";
import { LOAD_CHAT_NUM, START_CHAT_ORDER } from "../../assets/data/constNum";

type propsType = {
  hasMore: boolean;
  dispatch: AppDispatch;
  chatData: chatDataType[];
  lastChatOrder: number;
};

export const loadMore = (props: propsType) => {
  const { dispatch, chatData, lastChatOrder, hasMore } = props;
  const chatQuery: Query = query(
    chatRef,
    orderByChild("order"),
    endBefore(lastChatOrder),
    limitToLast(LOAD_CHAT_NUM + 1)
  );

  if (hasMore) {
    onValue(
      chatQuery,
      (snapshot) => {
        //追加データを変換して状態に保存
        const bufChatData: chatDataType[] = convertChatData(snapshot.val());
        const newChatData = [...chatData, ...bufChatData];
        dispatch(setChatData(newChatData));

        //最後のチャット番号の保存と追加データの存在を判定
        if (newChatData.length !== 0) {
          const lastChatData = newChatData[newChatData.length - 1];
          if (lastChatData.order === START_CHAT_ORDER) {
            dispatch(setHasMore(false));
          }
          dispatch(setLastChatOrder(lastChatData.order));
        }
      },
      {
        onlyOnce: true,
      }
    );
  }
};
