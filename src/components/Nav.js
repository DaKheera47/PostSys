import React, { Fragment } from "react";
import "../stylesheets/nav.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Link as Scroll } from "react-scroll";
import { useAuth0 } from "@auth0/auth0-react";

function Nav(props) {
    let logoutURL = "";
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        // dev code
        logoutURL = "http://localhost:3000/#/";
    } else {
        // production code
        logoutURL = "https://dakheera47.github.io/PostSys/#/";
    }

    const { left, center, right, onClickClear } = props;
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <motion.nav initial={{ translateY: -100 }} animate={{ translateY: 0 }} className="sticky">
            <ul>
                <div className="left">
                    {left.map((e) => (
                        <li key={e}>
                            <NavLink
                                exact
                                to="/"
                                className="heading noselect"
                                activeClassName="nav-active"
                            >
                                {e}
                            </NavLink>
                        </li>
                    ))}
                </div>

                <div className="center">
                    {center.map((e) => (
                        <li key={e.name}>
                            {e.type === "scroll" ? (
                                <Scroll
                                    className="noselect navLink"
                                    to={e.cont}
                                    spy={true}
                                    smooth="easeOutQuint"
                                    offset={-100}
                                    duration={700}
                                >
                                    {e.name}
                                </Scroll>
                            ) : (
                                <button
                                    className="noselect navLink"
                                    onClick={onClickClear ? onClickClear : null}
                                >
                                    {e.name}
                                </button>
                            )}
                        </li>
                    ))}
                </div>

                <div className="right">
                    {right.map((e) =>
                        isAuthenticated ? (
                            <Fragment key={user.name}>
                                <li>
                                    <button
                                        onClick={() =>
                                            logout({
                                                returnTo: logoutURL,
                                            })
                                        }
                                        className="noselect profileName navLink"
                                    >
                                        Sign out from {user.name}
                                    </button>
                                </li>
                                <li>
                                    <img src={user.picture} alt="Profile" className="profileUrl" />
                                </li>
                            </Fragment>
                        ) : (
                            <Fragment key="auth">
                                <button
                                    className="sign-in"
                                    key="signin"
                                    onClick={() => loginWithRedirect()}
                                >
                                    Sign In
                                </button>
                                <button
                                    className="sign-up"
                                    key="signup"
                                    onClick={() => loginWithRedirect()}
                                >
                                    Register
                                </button>
                            </Fragment>
                        )
                    )}
                </div>
            </ul>
        </motion.nav>
    );
}

export default Nav;
