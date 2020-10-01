import React from "react";
import { motion } from "framer-motion";

import { ArrowDown, ArrowUp } from "../displayComponents/DisplayArrows";

function TableHeader({ requestSort, arrowDirection }) {
    console.log(arrowDirection);
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
                <motion.td
                    onClick={() => requestSort(column.recognizer)}
                    className={column.cssClassName}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={column.recognizer}
                >
                    <span>{column.display}</span>
                    {arrowDirection === "ascending" ? ArrowUp : ArrowDown}
                </motion.td>
            ))}
        </tr>
    );
}

export default TableHeader;
