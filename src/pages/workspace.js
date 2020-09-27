import React, { useContext, useEffect } from "react";
import MainTable from "../components/MainTable";
import { motion } from "framer-motion";
import { ItemContext } from "../contexts/ItemsContext";

function Workspace() {
    const [items, setItems] = useContext(ItemContext);

    useEffect(() => {
        document.title = "Workspace | Postsys";
    }, []);

    items.forEach((item) => {
        item.totalPrice = item.qty * item.unitPrice;
    });

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <MainTable items={items} setItems={setItems} />
        </motion.div>
    );
}

export default Workspace;
