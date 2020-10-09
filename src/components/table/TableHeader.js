import React from "react";
import { motion } from "framer-motion";

import { ArrowDown, ArrowUp } from "../displayComponents/DisplayArrows";

function TableHeader({ requestSort, sortConfig, allColumns }) {
    let DisplayArrow;

    allColumns.forEach((column) => {
        /* logic for arrow direction and sorting */

        if (
            // if ascending
            // if correct column
            // if arrow is not inline
            sortConfig.direction === "ascending" &&
            sortConfig.key === column.recognizer &&
            column.isArrowInline
        ) {
            DisplayArrow = ArrowDown;
        }

        if (
            sortConfig.key === column.recognizer &&
            sortConfig.direction === "descending" &&
            column.isArrowInline
        ) {
            DisplayArrow = ArrowUp;
        }
    });

    return (
        <tr className="noselect header">
            {allColumns.map((column) =>
                // mapping through all columns to make cleaner code
                column.hasSorting !== false ? (
                    <motion.td
                        onClick={() => requestSort(column.recognizer)}
                        className={column.cssClassName}
                        whileHover={{ scale: 1.025 }}
                        whileTap={{ scale: 0.975 }}
                        key={column.recognizer}
                    >
                        <span>{column.display}</span>
                        {column.isArrowInline && DisplayArrow}
                    </motion.td>
                ) : (
                    <motion.td className="td-disabled" key={column.recognizer}>
                        <span>{column.display}</span>
                    </motion.td>
                )
            )}
        </tr>
    );
}

export default TableHeader;
