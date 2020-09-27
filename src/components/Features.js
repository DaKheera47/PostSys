import React from "react";
import "../stylesheets/features.css";

function Features(props) {
    const { featuresLeft, featuresRight } = props;
    return (
        <div className="feature-container">
            <div className="left-feature">
                {featuresLeft.map((e) => (
                    <p key={e} className="feature-card">
                        {e}
                    </p>
                ))}
            </div>
            <div className="right-feature">
                {featuresRight.map((e) => (
                    <p key={e} className="feature-card">
                        {e}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Features;
