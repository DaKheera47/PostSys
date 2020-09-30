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
        {
            itemID: 10008,
            itemName: "Cheetos",
            unitPrice: 30,
        },
        {
            itemID: 10009,
            itemName: "Lays",
            unitPrice: 20,
        },
        {
            itemID: 10010,
            itemName: "Pencils",
            unitPrice: 5,
        },
        {
            itemID: 10011,
            itemName: "Ball Point Pen",
            unitPrice: 20,
        },
        {
            itemID: 10012,
            itemName: "Water Bottle (large)",
            unitPrice: 50,
        },
        {
            itemID: 10013,
            itemName: "Water Bottle (small)",
            unitPrice: 30,
        },
    ]);
    return <ItemContext.Provider value={[items, setItems]}>{props.children}</ItemContext.Provider>;
}

export default ItemsContextProvider;
