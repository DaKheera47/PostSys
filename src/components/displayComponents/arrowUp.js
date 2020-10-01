import React from "react";
import { motion } from "framer-motion";

export default (
    <motion.svg
        width="15"
        height="10"
        viewBox="0 0 15 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        <path
            d="M0.239728 9.16423L0.731073 9.72266C0.885708 9.89706 1.09144 9.99313 1.31132 9.99313C1.53108 9.99313 1.73706 9.89706 1.89169 9.72266L7.49662 3.39616L13.108 9.72968C13.2624 9.90408 13.4684 10 13.6881 10C13.9079 10 14.114 9.90408 14.2685 9.72968L14.76 9.17469C15.08 8.81378 15.08 8.22589 14.76 7.86498L8.07894 0.297057C7.92455 0.122797 7.71881 1.54965e-05 7.4971 1.54965e-05H7.49454C7.27466 1.54965e-05 7.06893 0.122934 6.91454 0.297057L0.239728 7.84448C0.0850922 8.01874 0.00021303 8.25796 -3.0874e-05 8.506C-3.0874e-05 8.75418 0.0850922 8.9901 0.239728 9.16423Z"
            fill="black"
        />
    </motion.svg>
);
