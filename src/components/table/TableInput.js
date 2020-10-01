import React, { useState } from "react";

function TableInput({ currentItems, allItems, setCurrentItems }) {
    const [itemIdForm, setItemIdForm] = useState("");
    const [itemUnitsForm, setItemUnitsForm] = useState(1);
    // logic for form handling
    const handleChange = (e) => {
        switch (e.target.id) {
            case "IdInput":
                setItemIdForm(e.target.value);
                break;

            case "UnitsInput":
                setItemUnitsForm(e.target.value);
                break;
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
                            item.qty = item.qty + Number(itemUnitsForm);
                            item.totalPrice = parseFloat(
                                (item.unitPrice * Number(item.qty)).toFixed(2)
                            );
                            // resetting value back to empty after changes
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

    return (
        <tr>
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
            <td className="td-name"></td>
            <td className="td-qty">
                {/* item units input field */}
                <input
                    type="number"
                    id="UnitsInput"
                    className="unitInput"
                    min="1"
                    max="100000"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={itemUnitsForm}
                />
            </td>
            {/* placecholders to keep space */}
            <td className="td-price"></td>
            <td className="td-price"></td>
        </tr>
    );
}

export default TableInput;
