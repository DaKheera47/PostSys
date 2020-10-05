import React, { useState, useEffect, useMemo } from "react";
import "../../stylesheets/maintable.css";

import TableHeader from "./TableHeader";
import TableInput from "./TableInput";
import TableRowGen from "./TableRow";

function MainTable({ items: allItems, onTotalChange, setCurrentItems, currentItems }) {
    const [totalCost, setTotalCost] = useState(0);
    const [sortConfig, setSortConfig] = useState([...allItems]);
    console.log(currentItems);

    // const [currentItems, setCurrentItems] = useState(itemsFromWorkspace);

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

    let sortDirection;

    const requestSort = (key) => {
        sortDirection = "ascending";

        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            sortDirection = "descending";
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

    const handleAddUnit = (itemID) => {
        // duping to not directly mutate state
        let tempCurrentItems = [...currentItems];

        tempCurrentItems.forEach((item) => {
            if (item.itemID === itemID) {
                item.qty += 1;
                item.totalPrice = parseFloat((item.unitPrice * Number(item.qty)).toFixed(2));
            }
        });

        // setting current items to the newly changed current items
        // which also updates table rows and receipt bar
        setCurrentItems(tempCurrentItems);
    };

    const handleRemoveUnit = (itemID) => {
        // duping to not directly mutate state
        let tempCurrentItems = [...currentItems];

        tempCurrentItems.forEach((item) => {
            if (item.itemID === itemID && item.qty > 1) {
                item.qty -= 1;
                item.totalPrice = parseFloat((item.unitPrice * Number(item.qty)).toFixed(2));
            }
        });

        // setting current items to the newly changed current items
        // which also updates table rows and receipt bar
        setCurrentItems(tempCurrentItems);
    };

    return (
        <>
            <table className="MainTable" id="table-to-xls">
                <thead>
                    <TableHeader requestSort={requestSort} sortConfig={sortConfig} />
                </thead>
                <tbody>
                    <TableInput
                        currentItems={currentItems}
                        allItems={allItems}
                        setCurrentItems={setCurrentItems}
                        handleRemoveUnit={handleRemoveUnit}
                        handleAddUnit={handleAddUnit}
                    />

                    <TableRowGen
                        currentItems={currentItems}
                        handleRemoveUnit={handleRemoveUnit}
                        handleAddUnit={handleAddUnit}
                    />
                </tbody>
            </table>
        </>
    );
}

export default MainTable;
