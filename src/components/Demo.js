import React from "react";
import "../stylesheets/demo.css";
import { motion } from "framer-motion";

function Demo() {
    return (
        <motion.div
            initial={{ translateY: -1000 }}
            animate={{ translateY: 0 }}
            className="demo-container"
        >
            <div className="sizer">
                <h1>
                    Get Your
                    <br />
                    <span>Free Demo </span>Today
                </h1>
                <button className="default-btn">Free Demo!</button>
                <a href="/" className="block">
                    See Pricing
                </a>

                <svg
                    width="22"
                    height="33"
                    viewBox="0 0 22 33"
                    fill="none"
                    className="mouse"
                >
                    <rect
                        x="1.5625"
                        y="1.93597"
                        width="18.875"
                        height="30.064"
                        rx="9.43751"
                        stroke="#515070"
                        strokeWidth="2"
                    />
                    <path
                        d="M11 10.282V16.2463"
                        stroke="#515070"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="bevel"
                        className="scroll-wheel"
                    />
                </svg>
            </div>
        </motion.div>
    );
}

export default Demo;
