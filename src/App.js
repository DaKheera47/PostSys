import React, { Suspense, lazy } from "react";
import "./stylesheets/app.css";
import Home from "./pages/home";
import MobileHome from "./mobile-pages/MobileHome";
import { Switch, Route, Redirect } from "react-router";
import ItemsContextProvider from "./contexts/ItemsContext";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserView, MobileView } from "react-device-detect";
const Workspace = lazy(() => import("./pages/workspace"));

function App() {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="App">
            <BrowserView>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/">
                            {/* uncomment line below in production. makes it a protected route */}
                            {/* {!isAuthenticated ? <Home /> : <Redirect to="/workspace" />} */}
                            <Home />
                        </Route>
                        <Route exact path="/workspace">
                            <ItemsContextProvider>
                                {/* uncomment line below in production. makes it a protected route */}
                                {/* {isAuthenticated ? <Workspace /> : <Redirect to="/" />} */}
                                <Workspace />
                            </ItemsContextProvider>
                        </Route>
                        <Route>
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </Suspense>
            </BrowserView>

            <MobileView>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/">
                            {!isAuthenticated ? <MobileHome /> : <MobileHome />}
                        </Route>

                        <Route>
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </Suspense>
            </MobileView>
        </div>
    );
}

export default App;
