// libraries
import React, { useEffect, useState } from "react";
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
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        document.title = "Welcome to PostSys";
    }, []);

    const landingPageNav = (
        <Nav
            mode="scroll"
            left={["PostSys"]}
            center={[
                { name: "Home", url: "/", cont: "hero-container" },
                {
                    name: "Features",
                    url: "/features",
                    cont: "feature-container",
                },
                {
                    name: "Projects",
                    url: "/workspace",
                    cont: "feature-container",
                },
            ]}
            right={
                isAuthenticated
                    ? [{ name: "DaKheera47", url: "/username" }]
                    : [""]
            }
            img={
                isAuthenticated
                    ? [
                          "data:image/png;base64,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",
                      ]
                    : null
            }
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
