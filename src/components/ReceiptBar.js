import React from "react";
import "../stylesheets/receiptbar.css";

function ReceiptBar({ total }) {
    return (
        <div style={{ position: "absolute", top: 500, left: 1500 }}>
            <h1>Total: {total}</h1>
        </div>
    );
}

export default ReceiptBar;
