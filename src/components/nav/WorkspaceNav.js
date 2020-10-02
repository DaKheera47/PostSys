import React from "react";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

import "../../stylesheets/mainnav.css";
import { NavLink } from "react-router-dom";

function WorkspaceNav() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    let logoutURL = "";
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        // dev code
        logoutURL = "http://localhost:3000/#/";
    } else {
        // production code
        logoutURL = "https://dakheera47.github.io/PostSys/#/";
    }

    return (
        <motion.div
            initial={{ translateY: -100 }}
            animate={{ translateY: 0 }}
            className="nav-container"
        >
            <div className="nav-left-container">
                <NavLink className="nav-brand" to="/">
                    PostSys
                </NavLink>
            </div>

            <div className="nav-center-container">
                <button className="nav-center-btn center-underline">Projects</button>
                <button className="nav-center-btn center-underline">Edit</button>
                <button className="nav-center-btn center-underline">Clear</button>
            </div>

            <div className="nav-right-container">
                {isAuthenticated ? (
                    // if logged in
                    <>
                        <button
                            className="nav-logout-btn center-underline"
                            onClick={() =>
                                logout({
                                    returnTo: logoutURL,
                                })
                            }
                        >
                            Sign out from {user.name}
                        </button>
                        <img className="nav-user-img" src={user.picture} alt="Profile" />
                    </>
                ) : (
                    // if not logged in
                    <>
                        <button className="nav-sign-in" onClick={() => loginWithRedirect()}>
                            Sign In
                        </button>
                        <button className="nav-sign-up" onClick={() => loginWithRedirect()}>
                            Register
                        </button>
                    </>
                )}
            </div>
        </motion.div>
    );
}

export default WorkspaceNav;
