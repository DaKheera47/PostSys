import React, { Suspense, lazy } from "react";
import "./stylesheets/app.css";
import Home from "./pages/home";
import MobileHome from "./mobile-pages/MobileHome";
import { Switch, Route, Redirect } from "react-router";
import ItemsContextProvider from "./contexts/ItemsContext";
import { BrowserView, MobileView } from "react-device-detect";
const Workspace = lazy(() => import("./pages/workspace"));

function App() {
    return (
        <div className="App">
            <BrowserView>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/workspace">
                            <ItemsContextProvider>
                                <Workspace />
                            </ItemsContextProvider>
                        </Route>
                    </Switch>
                </Suspense>
            </BrowserView>

            <MobileView>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/">
                            <MobileHome />
                        </Route>

                        <Route exact path="/workspace">
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </Suspense>
            </MobileView>
        </div>
    );
}

export default App;
