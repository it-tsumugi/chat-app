import { MuiThemeProvider, StylesProvider } from "@material-ui/core";
import { VFC } from "react";
import { Provider } from "react-redux";

import { ComponentRouter } from "./router/ComponentRouter";

import { store } from "./store/store";
import { theme } from "./assets/style/theme";

export const App: VFC = () => {
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <ComponentRouter />
                </Provider>
            </MuiThemeProvider>
        </StylesProvider>
    );
};
