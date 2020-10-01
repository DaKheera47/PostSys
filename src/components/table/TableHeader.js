import React from "react";
import { motion } from "framer-motion";

import { ArrowDown, ArrowUp } from "../displayComponents/DisplayArrows";

function TableHeader({ requestSort, sortConfig }) {
    const allColumns = [
        {
            recognizer: "itemID",
            cssClassName: "th-id heading",
            display: "Item ID",
        },
        {
            recognizer: "itemName",
            cssClassName: "th-name heading",
            display: "Item Name/Description",
        },
        {
            recognizer: "qty",
            cssClassName: "th-qty heading",
            display: "Units",
        },
        {
            recognizer: "unitPrice",
            cssClassName: "th-unitPrice heading",
            display: "Unit Price",
        },
        {
            recognizer: "totalPrice",
            cssClassName: "th-totalPrice heading",
            display: "Total Price",
        },
    ];

    return (
        <tr className="noselect header">
            {allColumns.map((column) => (
                // mapping through all columns to make cleaner code
                <motion.td
                    onClick={() => requestSort(column.recognizer)}
                    className={column.cssClassName}
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.975 }}
                    key={column.recognizer}
                >
                    <span>{column.display}</span>
                    {/* logic for arrow direction and sorting */}
                    {sortConfig.direction === "ascending" && sortConfig.key === column.recognizer
                        ? ArrowDown
                        : sortConfig.key === column.recognizer &&
                          sortConfig.direction === "descending"
                        ? ArrowUp
                        : null}
                </motion.td>
            ))}
        </tr>
    );
}

export default TableHeader;
