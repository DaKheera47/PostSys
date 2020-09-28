import React from "react";
import styled from "styled-components";

import { defaultFont, DefaultButton } from "../styles/styles";

const MobileNavBar = styled.nav`
    width: 100%;
    height: 70px;
    background-color: #515070;
    font-family: ${defaultFont};
    font-weight: 500;
    color: #ffbb91;
    position: sticky;
    top: 0;
`;

const NavLi = styled.ul`
    width: 100%;
    height: 70px;
    background-color: #515070;
    font-family: ${defaultFont};
    font-weight: 500;
    color: #ffbb91;
    position: sticky;
    top: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MobileLeftContainer = styled.li`
    margin-right: 30vw;
`;
const MobileRightContainer = styled.li``;

const Heading = styled.a`
    font-size: 1.5rem;
    padding: 0 5px;
    color: #ffbb91;
    text-decoration: none;
    text-align: center;
`;

function MobileNav() {
    return (
        <MobileNavBar>
            <NavLi>
                <MobileLeftContainer>
                    <Heading as="a" href="/">
                        PostSys
                    </Heading>
                </MobileLeftContainer>

                <MobileRightContainer>
                    <DefaultButton as="a" href="/">
                        Register
                    </DefaultButton>
                </MobileRightContainer>
            </NavLi>
        </MobileNavBar>
    );
}

export default MobileNav;
