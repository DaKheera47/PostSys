import React from "react";
import styled from "styled-components";
import { DefaultButton } from "../styles/styles";

const Heading = styled.h1`
    color: ${(props) => (props.primary ? "#515070" : "black")};
    font-size: 3rem;
`;

const HighlightedHeading = styled.span`
    color: #ff8e6e;
`;

const Tagline = styled.h3`
    font-size: 1rem;
`;

function MobileHero(props) {
    const {
        headingOne,
        headingTwo,
        tagline,
        highlighted,
        btnText,
        primary,
    } = props;
    return (
        <>
            <Heading primary={primary}>
                {headingOne}
                <HighlightedHeading>{highlighted}</HighlightedHeading>
                {headingTwo}
            </Heading>
            <Tagline>{tagline}</Tagline>
            <DefaultButton>{btnText}</DefaultButton>
        </>
    );
}

export default MobileHero;
