import React from "react";
// import { footerLink } from "react-router-dom";
import { motion } from "framer-motion";
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
                        className="center-underline footer-center-btn"
                        to={item.container}
                        smooth="easeOutQuint"
                        offset={-100}
                        duration={700}
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
