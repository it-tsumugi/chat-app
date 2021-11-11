import { configureStore } from "@reduxjs/toolkit";

import { chatDataReducer } from "./slices/chatDataSlice";
import { isChatsCompletedReducer } from "./slices/isChatsCompletedSlice";
import { hasMoreReducer } from "./slices/hasMoreSlice";
import { latestChatOrderReducer } from "./slices/latestChatOrderSlice";
import { lastChatOrderReducer } from "./slices/lastChatOrderSlice";

export const store = configureStore({
  reducer: {
    chatData: chatDataReducer,
    isChatsCompleted: isChatsCompletedReducer,
    hasMore: hasMoreReducer,
    latestChatOrder: latestChatOrderReducer,
    lastChatOrder: lastChatOrderReducer,
  },
});
