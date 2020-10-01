import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function TableRow({ currentItems }) {
    const listVariant = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
        exit: { opacity: 0, x: 0 },
    };

    const itemVariant = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
        exit: { opacity: 0, x: 0 },
    };

    return (
        <AnimatePresence>
            <AnimateSharedLayout>
                {currentItems.map((item) => (
                    <motion.tr
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={listVariant}
                        key={item.itemID}
                        layout
                    >
                        <motion.td className="td-id" variants={itemVariant} exit="exit">
                            {item.itemID}
                        </motion.td>
                        <motion.td className="td-name" variants={itemVariant} exit="exit">
                            {item.itemName}
                        </motion.td>
                        <motion.td className="td-qty" variants={itemVariant} exit="exit">
                            {item.qty}
                        </motion.td>
                        <motion.td className="td-price" variants={itemVariant} exit="exit">
                            Rs. {item.unitPrice}
                        </motion.td>
                        <motion.td className="td-price" variants={itemVariant} exit="exit">
                            Rs. {item.totalPrice}
                        </motion.td>
                    </motion.tr>
                ))}
            </AnimateSharedLayout>
        </AnimatePresence>
    );
}

export default TableRow;
