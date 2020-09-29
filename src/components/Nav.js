import React, { Fragment } from "react";
import "../stylesheets/nav.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Link as Scroll } from "react-scroll";
import { useAuth0 } from "@auth0/auth0-react";

function Nav(props) {
    const { left, center, right } = props;
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
                                <NavLink className="noselect navLink" exact to={e.url}>
                                    {e.name}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </div>

                <div className="right">
                    {right.map((e) =>
                        isAuthenticated ? (
                            <Fragment key={user.name}>
                                <li>
                                    <a
                                        exact
                                        onClick={() =>
                                            logout({
                                                returnTo: window.location.origin,
                                            })
                                        }
                                        key={e.name}
                                        to={e.url}
                                        className="noselect profileName navLink"
                                    >
                                        Sign out from {user.name}
                                    </a>
                                </li>
                                <li>
                                    <a exact to="/workspace" key={e.name} className="noselect">
                                        <img
                                            src={user.picture}
                                            alt="Profile"
                                            className="profileUrl"
                                        />
                                    </a>
                                </li>
                            </Fragment>
                        ) : (
                            <Fragment key="auth">
                                <a
                                    className="sign-in"
                                    key="signin"
                                    onClick={() => loginWithRedirect()}
                                >
                                    Sign In
                                </a>
                                <a
                                    className="sign-up"
                                    key="signup"
                                    onClick={() => loginWithRedirect()}
                                >
                                    Register
                                </a>
                            </Fragment>
                        )
                    )}
                </div>
            </ul>
        </motion.nav>
    );
}

export default Nav;
