import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../stylesheets/receiptbar.css";
import TextTransition, { presets } from "react-text-transition";

function ReceiptBar({ total, grandTotal }) {
    const [change, setChange] = useState(0);
    const [payment, setPayment] = useState("");
    let pre = "";

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    const handlePaymentInput = (e) => {
        if (isNumeric(+e.target.value)) {
            setPayment(e.target.value);
        }
    };

    useEffect(() => {
        setChange(parseFloat((Number(payment) - Number(grandTotal)).toFixed(2)));
    }, [payment, grandTotal]);

    return (
        <div className="rb-container">
            <div className="rb-receipt-number-container">
                <p>Receipt No. 5432</p>
            </div>

            <h1 className="rb-cost-text">
                <TextTransition
                    text={`Rs. ${grandTotal}`}
                    springConfig={{ mass: 1, tension: 120, friction: 14 }}
                    className="rb-text"
                />
            </h1>

            <div className="rb-gst-container">
                <p>Gross Total - Rs. {total}</p>
                <p>GST - 5%</p>
                <p>Discount - 0%</p>
            </div>

            <div className="rb-payment-change-container">
                <input
                    type="number"
                    name="payment"
                    id="payment"
                    placeholder="Add Payment"
                    className="rb-payment-input"
                    onChange={handlePaymentInput}
                    value={payment}
                />
                <AnimatePresence>
                    {change >= 0 ? (pre = "Change - Rs.") : (pre = "Add Rs.")}
                    {change >= 0 ? (
                        <motion.span
                            initial={{ translateY: 25, opacity: 0 }}
                            animate={{ translateY: 0, opacity: 1 }}
                            exit={{ translateY: 25, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="rb-change-text"
                        >
                            <TextTransition
                                text={`${pre} ${change}`}
                                springConfig={presets.wobbly}
                            />
                        </motion.span>
                    ) : (
                        <motion.span
                            initial={{ translateY: 25, opacity: 0 }}
                            animate={{ translateY: 0, opacity: 1 }}
                            transition={{ duration: 0.25 }}
                            exit={{ translateY: 25, opacity: 0 }}
                            className="rb-change-text"
                        >
                            <TextTransition
                                text={`${pre} ${Math.abs(change)}`}
                                springConfig={presets.wobbly}
                            />
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default ReceiptBar;
