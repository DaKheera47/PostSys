import React from "react";
import "../stylesheets/mobile-nav.css";

function MobileNav() {
    return (
        <nav>
            <ul className="mobile-nav">
                <li className="mobile-left-container">
                    <div className="mobile-left">
                        <a className="mobile-heading" href="/">
                            PostSys
                        </a>
                    </div>
                </li>

                <li className="mobile-right-container">
                    <div className="mobile-right">
                        <a className="mobile-text" href="/">
                            Sign In
                        </a>
                        <a className="mobile-text" href="/">
                            Register
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default MobileNav;
