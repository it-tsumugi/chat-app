import { VFC } from "react";
import { Provider } from "react-redux";

import { ComponentRouter } from "./router/ComponentRouter";

import { store } from "./store/store";

export const App: VFC = () => {
  return (
    <Provider store={store}>
      <ComponentRouter />
    </Provider>
  );
};
