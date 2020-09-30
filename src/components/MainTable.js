import React, { useMemo, useState, useEffect } from "react";
import "../stylesheets/maintable.css";
import { motion } from "framer-motion";

function MainTable(props) {
    let { items: allItems, setItems: setAllItems, onTotalChange } = props;
    const [totalCost, setTotalCost] = useState(0);
    const [sortConfig, setSortConfig] = useState([...allItems]);
    const [itemIdForm, setItemIdForm] = useState("");
    const [itemUnitsForm, setItemUnitsForm] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    const [allColumns, setAllColumns] = useState([
        {
            recognizer: "itemID",
            cssClassName: "th-id",
            display: "Item ID",
        },
        {
            recognizer: "itemName",
            cssClassName: "th-name",
            display: "Item Name/Description",
        },
        {
            recognizer: "qty",
            cssClassName: "th-qty",
            display: "Units",
        },
        {
            recognizer: "unitPrice",
            cssClassName: "th-unitPrice",
            display: "Unit Price",
        },
        {
            recognizer: "totalPrice",
            cssClassName: "th-totalPrice",
            display: "Total Price",
        },
    ]);

    // Logic for sorting
    let direction;
    const arrowDown = (
        <motion.svg
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.7602 0.835788L14.2689 0.277357C14.1143 0.10296 13.9085 0.00688247 13.6886 0.00688247C13.4689 0.00688247 13.2629 0.10296 13.1083 0.277357L7.50335 6.60385L1.89197 0.270337C1.73758 0.0959395 1.5316 0 1.31184 0C1.09208 0 0.885983 0.0959395 0.731469 0.270337L0.240002 0.825327C-0.0800007 1.18624 -0.0800007 1.77412 0.240002 2.13503L6.92103 9.70296C7.07542 9.87722 7.28116 10 7.50287 10H7.50543C7.72531 10 7.93104 9.87708 8.08543 9.70296L14.7602 2.15554C14.9149 1.98128 14.9998 1.74205 15 1.49401C15 1.24584 14.9149 1.00991 14.7602 0.835788Z"
                fill="black"
            />
        </motion.svg>
    );

    const arrowUp = (
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

    // reversing sorting on subsequent clicks
    const requestSort = (key) => {
        direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

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
    }, [sortConfig]);

    // making the rows of items
    const itemTRS = currentItems.map((item) => (
        <tr key={item.itemID}>
            <td className="td-id">{item.itemID}</td>
            <td className="td-name">{item.itemName}</td>
            <td className="td-qty">{item.qty}</td>
            <td className="td-price">Rs. {item.unitPrice}</td>
            <td className="td-price">Rs. {item.totalPrice}</td>
        </tr>
    ));

    // logic for form handling
    const handleChange = (e) => {
        switch (e.target.id) {
            case "IdInput":
                setItemIdForm(e.target.value);
                break;

            case "UnitsInput":
                setItemUnitsForm(e.target.value);
                break;

            default:
                setItemIdForm(e.target.value);
                setItemUnitsForm(e.target.value);
        }
    };

    // logic on input
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (itemIdForm !== "" && itemUnitsForm !== "") {
                let count = 1;

                // counting occurances of new item
                currentItems.map((item) => (item.itemID === Number(itemIdForm) ? count++ : null));

                if (count <= 1) {
                    // changing current display items
                    allItems.map((item) => {
                        if (item.itemID === Number(itemIdForm)) {
                            // adding new item
                            setCurrentItems((p) => [
                                {
                                    itemID: Number(itemIdForm),
                                    qty: Number(itemUnitsForm),
                                    itemName: item.itemName,
                                    unitPrice: item.unitPrice,
                                    totalPrice: item.unitPrice * Number(itemUnitsForm),
                                },
                                ...p,
                            ]);

                            // resetting value back to empty after changes
                            setItemIdForm("");
                            setItemUnitsForm(1);
                        }
                    });
                } else {
                    // checking if item code already exists. if it does, add the quantity to the previous value
                    currentItems.map((item) => {
                        if (item.itemID === Number(itemIdForm)) {
                            item.qty = item.qty + Number(itemUnitsForm);
                            item.totalPrice = parseFloat(
                                (item.unitPrice * Number(item.qty)).toFixed(2)
                            );
                            // resetting value back to empty after changes
                            setItemIdForm("");
                            setItemUnitsForm(1);
                        }
                    });
                }
            }
        }
    };

    // adding total value to variable as soon as currentItems changes
    useEffect(() => {
        setTotalCost(0);
        currentItems.map((item) => {
            setTotalCost((p) => p + item.totalPrice);
            console.log(item);
        });
    }, [currentItems, itemUnitsForm, itemIdForm]);

    useEffect(() => {
        if (+totalCost) {
            onTotalChange(totalCost);
        }
    }, [totalCost]);

    return (
        <table className="MainTable">
            <thead>
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
                            {sortConfig.direction === "ascending" &&
                            sortConfig.key === column.recognizer
                                ? arrowDown
                                : sortConfig.key === column.recognizer &&
                                  sortConfig.direction === "descending"
                                ? arrowUp
                                : null}
                        </motion.td>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            type="text"
                            id="IdInput"
                            className="idInput"
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            value={itemIdForm}
                        />
                    </td>
                    <td></td>
                    <td>
                        <input
                            type="number"
                            id="UnitsInput"
                            className="unitInput"
                            min={1}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            value={itemUnitsForm}
                        />
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                {itemTRS.length !== 0 ? (
                    itemTRS
                ) : (
                    <tr>
                        <td className="td-id"></td>
                        <td className="td-name"></td>
                        <td className="td-qty"></td>
                        <td className="td-price"></td>
                        <td className="td-price"></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default MainTable;
