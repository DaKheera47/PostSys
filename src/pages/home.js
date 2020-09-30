// libraries
import React, { useEffect } from "react";
import { motion } from "framer-motion";
// Components
import ChartSVG from "../components/ChartSVG";
import Nav from "../components/Nav";
import Demo from "../components/Demo";
import Hero from "../components/Hero";
import CommonHero from "../components/CommonHero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import CompletedSVG from "../components/CompletedSVG";
// stylesheet
import "../stylesheets/home.css";

function Home() {
    useEffect(() => {
        document.title = "Welcome to PostSys";
    }, []);

    const landingPageNav = (
        <Nav
            mode="scroll"
            left={["PostSys"]}
            center={[
                {
                    type: "scroll",
                    name: "Home",
                    url: "/",
                    cont: "hero-container",
                },
                {
                    type: "scroll",
                    name: "Features",
                    url: "/features",
                    cont: "feature-container",
                },
                {
                    type: "link",
                    name: "Projects",
                    url: "/workspace",
                    cont: "feature-container",
                },
            ]}
            right={[""]}
            img={[""]}
        />
    );

    return (
        <>
            {landingPageNav}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
            >
                <Hero className="hero-container" />
                <Demo className="demo-container" />

                <CompletedSVG />
                <ChartSVG />
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
