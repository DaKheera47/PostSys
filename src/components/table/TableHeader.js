import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

import arrowDown from "../displayComponents/arrowDown";
import arrowUp from "../displayComponents/arrowUp";

function TableHeader({ currentItems, allItems }) {
    const [sortConfig, setSortConfig] = useState([...allItems]);

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
    // memoizing to save resources
    useMemo(() => {
        currentItems.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === "ascending" ? 1 : -1;
            }
            return 0;
        });
        return currentItems;
    }, [sortConfig, currentItems]);
    // Logic for sorting
    let direction;
    // reversing sorting on subsequent clicks
    const requestSort = (key) => {
        direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

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
                    {sortConfig.direction === "ascending" && sortConfig.key === column.recognizer
                        ? arrowDown
                        : sortConfig.key === column.recognizer &&
                          sortConfig.direction === "descending"
                        ? arrowUp
                        : null}
                </motion.td>
            ))}
        </tr>
    );
}

export default TableHeader;
