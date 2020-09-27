import React, { useEffect } from "react";
import Demo from "../components/Demo";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CompletedSVG from "../components/CompletedSVG";
import { motion } from "framer-motion";
import "../stylesheets/home.css";
import ChartSVG from "../components/ChartSVG";

function Home() {
    useEffect(() => {
        document.title = "Welcome to PostSys";
    }, []);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
        </motion.div>
    );
}

export default Home;
