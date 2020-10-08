import React from "react";
// import { footerLink } from "react-router-dom";
import { scroller } from "react-scroll";
import "../stylesheets/footer.css";

function Footer() {
    const centerItems = [
        {
            displayName: "About",
            url: "/",
            container: "",
        },
        {
            displayName: "Contact",
            url: "",
            container: "",
        },
    ];

    return (
        <div className="footer-sticky-bottom">
            <div className="footer-left-container">
                <button className="footer-brand">PostSys</button>
            </div>

            <div className="footer-center-container">
                {centerItems.map((item) => (
                    <button
                        key={item.displayName}
                        className="center-underline nav-center-btn"
                        onClick={() => {
                            scroller.scrollTo(item.container, {
                                duration: 700,
                                offset: -95,
                                smooth: "easeOutQuint",
                            });
                        }}
                    >
                        {item.displayName}
                    </button>
                ))}
            </div>

            <div className="footer-right-container">
                <button className="center-underline footer-center-btn">Social Medias</button>
            </div>
        </div>
    );
}

export default Footer;
