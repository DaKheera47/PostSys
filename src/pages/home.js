// libraries
import React, { useEffect } from "react";
import { motion } from "framer-motion";
// Components
import { FlagshipSVG, FeaturesSVG } from "../components/displayComponents/SVGs";
// import Nav from "../components/Nav";
import LandingNav from "../components/nav/LandingNav";
import Demo from "../components/Demo";
import Hero from "../components/Hero";
import CommonHero from "../components/CommonHero";
import Features from "../components/Features";
import Footer from "../components/Footer";
// stylesheet
import "../stylesheets/home.css";

function Home() {
    useEffect(() => {
        document.title = "Welcome to PostSys";
    }, []);

    return (
        <>
            <LandingNav />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
            >
                <Hero className="hero-container" />
                <Demo className="demo-container" />

                {FlagshipSVG}
                {FeaturesSVG}

                <Features
                    featuresLeft={[
                        "Upload Item Structure",
                        "Daily/Weekly Records",
                        "Quick Quantity Update",
                    ]}
                    featuresRight={[
                        "Affordable Subscription",
                        "24/7 Online Support",
                        "Monthly/Yearly Records",
                    ]}
                />

                <CommonHero
                    className="common-hero-container"
                    heading="So, what are you "
                    tagline="Signup today and get 50% off for a 3 month subscription for
                    your first POS Project with 24/7 Customer Support!"
                    highlighted="waiting for?"
                    btnText="Start Today!"
                />
                <Footer
                    left={["PoSys"]}
                    center={["About Us", "Contact Us"]}
                    right={["Social Medias"]}
                />
            </motion.div>
        </>
    );
}

export default Home;
