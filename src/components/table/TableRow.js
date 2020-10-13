import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { HiPlus } from "react-icons/hi";
import { FiMinus } from "react-icons/fi";
import { BsTrashFill } from "react-icons/bs";

function TableRow({ currentItems, handleRemoveUnit, handleAddUnit, handleRemoveItem }) {
    const itemVariant = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0 },
    };

    return (
        <AnimateSharedLayout>
            <AnimatePresence>
                {currentItems.map((item) => (
                    <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={item.itemID}
                        layout
                        className="TableRow"
                    >
                        <motion.td className="td-delete" variants={itemVariant}>
                            <BsTrashFill
                                className="td-trash"
                                onClick={() => {
                                    handleRemoveItem(item);
                                }}
                            />
                        </motion.td>

                        <motion.td className="td-id" variants={itemVariant}>
                            {item.itemID}
                        </motion.td>

                        <motion.td className="td-name" variants={itemVariant}>
                            {item.itemName}
                        </motion.td>

                        <motion.td className="td-qty noselect" variants={itemVariant}>
                            <FiMinus
                                onClick={() => handleRemoveUnit(item.itemID)}
                                className="table-row-qty-arrow"
                            />

                            {item.qty}

                            <HiPlus
                                onClick={() => handleAddUnit(item.itemID)}
                                className="table-row-qty-arrow"
                            />
                        </motion.td>

                        <motion.td className="td-price td-unitPrice" variants={itemVariant}>
                            Rs. {item.unitPrice}
                        </motion.td>

                        <motion.td className="td-price td-totalPrice" variants={itemVariant}>
                            Rs. {item.totalPrice}
                        </motion.td>
                    </motion.tr>
                ))}
            </AnimatePresence>
        </AnimateSharedLayout>
    );
}

export default TableRow;
