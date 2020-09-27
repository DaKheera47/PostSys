import React from "react";
import "../stylesheets/common-hero.css";

function CommonHero(props) {
    const { heading, tagline, highlighted, btnText } = props;
    return (
        <div className="common-hero-container">
            <div className="common-hero-sizer">
                <h1 className="header">
                    {heading} <span>{highlighted}</span>
                </h1>
                <h3 className="tagline">{tagline}</h3>
                <button className="default-btn">{btnText}</button>
            </div>
        </div>
    );
}

export default CommonHero;
