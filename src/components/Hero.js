import React from "react";
import "../stylesheets/hero.css";

function Hero() {
    return (
        <div className="hero-container">
            <h1 className="header">Quick, Easy and Convenient</h1>
            <h3 className="tagline">
                Get your POS system online with quick and easy monthly or annual
                subscription.
                <br /> Our subscription starts from $9.99 per month or $99.99
                annually.
                <br /> Really, it's that cheap!
            </h3>
            <button className="default-btn">Get Started</button>
        </div>
    );
}

export default Hero;
