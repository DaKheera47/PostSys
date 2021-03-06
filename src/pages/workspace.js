import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ItemContext } from "../contexts/ItemsContext";
import MainTable from "../components/table/MainTable";
import ReceiptBar from "../components/ReceiptBar";
import WorkspaceNav from "../components/nav/WorkspaceNav";

function Workspace() {
    const [items, setItems] = useContext(ItemContext);

    const [total, setTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);

    // Title upon loading document
    useEffect(() => {
        document.title = "Workspace | Postsys";
    }, []);

    // clear all fields and reset to initial state
    const onClickCancel = () => {
        setCurrentItems([]);
        setGrandTotal(0);
        setTotal(0);
    };

    let onTotalChange = (t) => {
        // only round to the nearest digit if total over 100
        if (t >= 100) {
            setTotal(Math.round(t));
        } else {
            setTotal(parseFloat(t.toFixed(2)));
        }

        // applying gst only when total cost above 1000
        if (total >= 1000) {
            setGrandTotal(parseFloat((total * 1.05).toFixed(2)));
        } else {
            setGrandTotal(total);
        }
    };

    return (
        <>
            <WorkspaceNav />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <MainTable
                    items={items}
                    setItems={setItems}
                    onTotalChange={onTotalChange}
                    currentItems={currentItems}
                    setCurrentItems={setCurrentItems}
                />

                <ReceiptBar
                    total={total}
                    grandTotal={grandTotal}
                    currentItemsLength={currentItems.length}
                    onClickCancel={onClickCancel}
                />
            </motion.div>
        </>
    );
}

export default Workspace;
