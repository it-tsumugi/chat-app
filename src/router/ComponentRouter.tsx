import { VFC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { ChatPage } from "../components/pages/ChatPage";

import { pathData } from "../assets/data/pathData";

export const ComponentRouter: VFC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={pathData.chatPage}>
                    <ChatPage />
                </Route>
                <Route path="*">
                    <Redirect to={{ pathname: pathData.chatPage }} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
