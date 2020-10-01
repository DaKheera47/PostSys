import React, { useState, useEffect, useMemo } from "react";

import "../../stylesheets/maintable.css";

import TableHeader from "./TableHeader";
import TableInput from "./TableInput";
import TableRowGen from "./TableRow";

function MainTable({ items: allItems, onTotalChange, currentItems: itemsFromWorkspace }) {
    const [totalCost, setTotalCost] = useState(0);
    const [sortConfig, setSortConfig] = useState([...allItems]);
    const [currentItems, setCurrentItems] = useState(itemsFromWorkspace);

    // send value of totalCost to the workspace component for rendering in the receipt bar
    useEffect(() => {
        onTotalChange(totalCost);
    }, [totalCost, onTotalChange]);

    // adding total value to variable as soon as currentItems changes
    useEffect(() => {
        let num = 0;

        currentItems.forEach((item) => {
            item.totalPrice ? (num += item.totalPrice) : (num += 0);
        });

        setTotalCost(num);
    }, [currentItems]);

    // update value of current items when the current items by the workspace change
    useEffect(() => {
        setCurrentItems(itemsFromWorkspace);
    }, [itemsFromWorkspace]);

    let sortDirection;
    let arrowDirection = "";

    const requestSort = (key) => {
        sortDirection = "ascending";
        arrowDirection = "up";

        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            sortDirection = "descending";
            arrowDirection = "down";
        }

        setSortConfig({ key, direction: sortDirection });
    };

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

    return (
        <table className="MainTable">
            <thead>
                <TableHeader requestSort={requestSort} sortConfig={sortConfig} />
            </thead>
            <tbody>
                <TableInput
                    currentItems={currentItems}
                    allItems={allItems}
                    setCurrentItems={setCurrentItems}
                />

                <TableRowGen currentItems={currentItems} />
            </tbody>
        </table>
    );
}

export default MainTable;
