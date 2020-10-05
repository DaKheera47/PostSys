import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

function TableRow({ currentItems }) {
    const itemVariant = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0 },
        exit: { opacity: 0, x: 0 },
    };

    return (
        <AnimateSharedLayout>
            {currentItems.map((item) => (
                <motion.tr
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={item.itemID}
                    layout
                >
                    <motion.td className="td-id" variants={itemVariant}>
                        {item.itemID}
                    </motion.td>
                    <motion.td className="td-name" variants={itemVariant}>
                        {item.itemName}
                    </motion.td>
                    <motion.td className="td-qty" variants={itemVariant}>
                        {item.qty}
                    </motion.td>
                    <motion.td className="td-price" variants={itemVariant}>
                        Rs. {item.unitPrice}
                    </motion.td>
                    <motion.td className="td-price" variants={itemVariant}>
                        Rs. {item.totalPrice}
                    </motion.td>
                </motion.tr>
            ))}
        </AnimateSharedLayout>
    );
}

export default TableRow;
