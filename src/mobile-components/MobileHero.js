import React from "react";

function MobileHero(props) {
    const { headingOne, headingTwo, tagline, highlighted, btnText } = props;
    return (
        <>
            <h1 className="header">
                {headingOne} <span>{highlighted}</span> {headingTwo}
            </h1>
            <h3 className="tagline">{tagline}</h3>
            <button className="default-btn">{btnText}</button>
        </>
    );
}

export default MobileHero;
