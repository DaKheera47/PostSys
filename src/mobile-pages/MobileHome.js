import React from "react";
import styled from "styled-components";

import MobileNav from "../mobile-components/MobileNav";
import MobileHero from "../mobile-components/MobileHero";
import FeatureCard from "../mobile-components/FeatureCard";

const MobileHomeContainer = styled.div`
    padding: 0 30px;
`;

function MobileHome() {
    return (
        <>
            <MobileNav />
            <MobileHomeContainer>
                <MobileHero
                    headingOne="Quick, Easy and Convenient"
                    tagline="Get your POS system online with quick and easy monthly or annual subscription.
                    Our subscription starts from $9.99 per month or $99.99 annually.
                    Really, it's that cheap!"
                    btnText="Get Started"
                    primary
                />
                <MobileHero
                    headingOne="Get your"
                    highlighted=" Free Demo "
                    headingTwo="today"
                    btnText="Free Demo!"
                />

                <FeatureCard
                    features={[
                        "Upload Item Structure",
                        "Daily/Weekly Records",
                        "Quick Quantity Update",
                        "Affordable Subscription",
                        "24/7 Online Support",
                        "Monthly/Yearly Records",
                    ]}
                />
                <br />

                <MobileHero
                    headingOne="So, what are you"
                    highlighted=" waiting for? "
                    btnText="Start today!"
                />
            </MobileHomeContainer>
        </>
    );
}

export default MobileHome;
