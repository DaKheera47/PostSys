import React, { useState, Suspense, lazy } from "react";
import "./stylesheets/app.css";
import Nav from "./components/Nav";
import Home from "./pages/home";
import { Switch, Route } from "react-router";
import ItemsContextProvider from "./contexts/ItemsContext";
const Workspace = lazy(() => import("./pages/workspace"));

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const workspaceNav = (
        <Nav
            mode="link"
            left={["PostSys"]}
            center={[
                {
                    name: "Projects",
                    url: "/",
                    cont: "",
                },
                {
                    name: "Edit",
                    url: "/",
                    cont: "",
                },
                {
                    name: "Clear",
                    url: "/",
                    cont: "",
                },
            ]}
            right={
                isAuthenticated
                    ? [{ name: "DaKheera47", url: "/username" }]
                    : [""]
            }
            img={
                isAuthenticated
                    ? [
                          "data:image/png;base64,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",
                      ]
                    : null
            }
        />
    );

    const landingPageNav = (
        <Nav
            mode="scroll"
            left={["PostSys"]}
            center={[
                { name: "Home", url: "/", cont: "hero-container" },
                {
                    name: "Features",
                    url: "/features",
                    cont: "feature-container",
                },
                {
                    name: "Projects",
                    url: "/workspace",
                    cont: "feature-container",
                },
            ]}
            right={
                isAuthenticated
                    ? [{ name: "DaKheera47", url: "/username" }]
                    : [""]
            }
            img={
                isAuthenticated
                    ? [
                          "data:image/png;base64,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",
                      ]
                    : null
            }
        />
    );

    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/">
                        {landingPageNav}
                        <Home />
                    </Route>
                    <Route exact path="/workspace">
                        {workspaceNav}
                        <ItemsContextProvider>
                            <Workspace />
                        </ItemsContextProvider>
                    </Route>
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
