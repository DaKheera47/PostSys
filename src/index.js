import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { HashRouter } from "react-router-dom";

const domain = process.env.REACT_APP_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;

let redirectURI = "";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    // dev code
    redirectURI = "http://localhost:3000/#/workspace";
} else {
    // production code
    redirectURI = "https://dakheera47.github.io/PostSys/#/workspace";
}
console.log(redirectURI);
ReactDOM.render(
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectURI}>
        <HashRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </HashRouter>
    </Auth0Provider>,
    document.getElementById("root")
);
