import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "../displayComponents/DisplayArrows";

function TableInput({
    currentItems,
    allItems,
    setCurrentItems,
    handleAddUnit,
    sortConfig,
    requestSort,
}) {
    const [itemIdForm, setItemIdForm] = useState("");
    const [itemUnitsForm, setItemUnitsForm] = useState(1);
    // logic for form handling
    const handleChange = (e) => {
        if (e.target.id === "IdInput") {
            setItemIdForm(e.target.value);
        }
        if (e.target.id === "UnitsInput") {
            setItemUnitsForm(e.target.value);
        }
    };

    // logic on input
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (itemIdForm !== "" && itemUnitsForm !== "") {
                let count = 1;

                // counting occurances of new item
                currentItems.map((item) => item.itemID === Number(itemIdForm) && count++);

                if (count <= 1) {
                    // changing current display items
                    allItems.forEach((item) => {
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
                    // duping current items to change
                    let tempCurrentItems = [...currentItems];

                    tempCurrentItems.forEach((item) => {
                        if (item.itemID === Number(itemIdForm)) {
                            handleAddUnit(item.itemID);
                            setItemIdForm("");
                            setItemUnitsForm(1);
                        }
                    });

                    // setting current items to the newly changed current items
                    // which also updates table rows and receipt bar
                    setCurrentItems(tempCurrentItems);
                }
            }
        }
    };

    // function for arrow direction calculation
    const getArrowDirection = (recognizer) => {
        if (sortConfig.direction === "ascending" && sortConfig.key === recognizer) {
            return ArrowDown;
        }
        if (sortConfig.direction === "descending" && sortConfig.key === recognizer) {
            return ArrowUp;
        }
    };

    return (
        <tr>
            {/* placehholder to keep space */}
            <td className="td-delete"></td>
            <td className="td-id">
                {/* item id input field */}
                <input
                    type="text"
                    id="IdInput"
                    className="idInput"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={itemIdForm}
                />
            </td>
            {/* placehholder to keep space */}
            <td className="td-name">
                <a onClick={() => requestSort("itemName")}>{getArrowDirection("itemName")}</a>
            </td>
            <td className="td-qty">
                <a onClick={() => requestSort("qty")}>{getArrowDirection("qty")}</a>
            </td>
            {/* placecholders to keep space */}
            <td className="td-price">
                <a onClick={() => requestSort("unitPrice")}>{getArrowDirection("unitPrice")}</a>
            </td>
            <td className="td-price">
                <a onClick={() => requestSort("totalPrice")}>{getArrowDirection("totalPrice")}</a>
            </td>
        </tr>
    );
}

export default TableInput;
