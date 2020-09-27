import React, { createContext, useState } from "react";

export const ItemContext = createContext();

function ItemsContextProvider(props) {
    const [items, setItems] = useState([
        {
            itemID: 10001,
            itemName: "MilkPak",
            unitPrice: 50,
        },
        {
            itemID: 10002,
            itemName: "Milky Bread",
            unitPrice: 60,
        },
        {
            itemID: 10003,
            itemName: "Zain",
            unitPrice: 0.1,
        },
        {
            itemID: 10004,
            itemName: "Eggs (1 dozen)",
            unitPrice: 120,
        },
        {
            itemID: 10005,
            itemName: "Bisconni biscuits",
            unitPrice: 15,
        },
        {
            itemID: 10006,
            itemName: "Peek Freans Biscuits",
            unitPrice: 30,
        },
        {
            itemID: 10007,
            itemName: "Milk",
            unitPrice: 100,
        },
    ]);
    return (
        <ItemContext.Provider value={[items, setItems]}>
            {props.children}
        </ItemContext.Provider>
    );
}

export default ItemsContextProvider;
