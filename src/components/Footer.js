import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/footer.css";

function Footer(props) {
    const { left, center, right } = props;
    return (
        <footer className="sticky-bottom">
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

                <div className="footer-center">
                    {center.map((e) => (
                        <li key={e}>
                            <NavLink
                                exact
                                to="/"
                                className="navLink noselect"
                                activeClassName="nav-active"
                            >
                                {e}
                            </NavLink>
                        </li>
                    ))}
                </div>

                <div className="right">
                    {right.map((e) => (
                        <li key={e}>
                            <NavLink
                                exact
                                to="/"
                                className="navLink noselect"
                                activeClassName="nav-active"
                            >
                                {e}
                            </NavLink>
                        </li>
                    ))}
                </div>
            </ul>
        </footer>
    );
}

export default Footer;
