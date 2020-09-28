import React from "react";
import styled from "styled-components";

const FeatureTile = styled.p`
    background-color: #515070;
    color: #ffbb91;
    padding: 15px 15px;
    border-radius: 5px;
`;

function FeatureCard({ features }) {
    return (
        <>
            {features.map((f) => (
                <FeatureTile>{f}</FeatureTile>
            ))}
        </>
    );
}

export default FeatureCard;
