import React from "react";
import MobileNav from "../mobile-components/MobileNav";
import MobileHero from "../mobile-components/MobileHero";

function MobileHome() {
    return (
        <div>
            <MobileNav />
            <MobileHero
                headingOne="Quick, Easy and Convenient"
                tagline="Get your POS system online with quick and easy monthly or annual subscription.
                Our subscription starts from $9.99 per month or $99.99 annually.
                Really, it's that cheap!"
                btnText="Get Started"
            />
            <MobileHero
                headingOne="Get your"
                highlighted=" Free Demo "
                headingTwo="today"
                btnText="Free Demo"
            />
        </div>
    );
}

export default MobileHome;
