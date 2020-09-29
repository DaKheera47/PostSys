import React, { Fragment } from "react";
import "../stylesheets/nav.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Link as Scroll } from "react-scroll";

function Nav(props) {
    const { left, center, right, img, mode } = props;

    return (
        <motion.nav
            initial={{ translateY: -100 }}
            animate={{ translateY: 0 }}
            className="sticky"
        >
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
                                <NavLink
                                    className="noselect navLink"
                                    exact
                                    to={e.url}
                                >
                                    {e.name}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </div>

                <div className="right">
                    {right.map((e) =>
                        e.name ? (
                            <Fragment key={e.name}>
                                <li>
                                    <NavLink
                                        exact
                                        key={e.name}
                                        to={e.url}
                                        className="noselect profileName navLink"
                                    >
                                        {e.name}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        exact
                                        to="/workspace"
                                        key={e.name}
                                        className="noselect"
                                    >
                                        <img
                                            src={img}
                                            alt="Profile"
                                            className="profileUrl"
                                        />
                                    </NavLink>
                                </li>
                            </Fragment>
                        ) : (
                            <Fragment key="auth">
                                <NavLink
                                    to="/signup"
                                    className="sign-in"
                                    key="signin"
                                >
                                    Sign In
                                </NavLink>
                                <NavLink
                                    to="/signup"
                                    className="sign-up"
                                    key="signup"
                                >
                                    Register
                                </NavLink>
                            </Fragment>
                        )
                    )}
                </div>
            </ul>
        </motion.nav>
    );
}

export default Nav;
