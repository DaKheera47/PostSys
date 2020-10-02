import React, { useContext, useEffect, useState } from "react";
import MainTable from "../components/table/MainTable";
import ReceiptBar from "../components/ReceiptBar";
import { motion } from "framer-motion";
import { ItemContext } from "../contexts/ItemsContext";
import Nav from "../components/Nav";

function Workspace() {
    const [items, setItems] = useContext(ItemContext);

    const [total, setTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        document.title = "Workspace | Postsys";
    }, []);

    const onClickClear = () => {
        setCurrentItems([]);
        setGrandTotal(0);
        setTotal(0);
    };

    const workspaceNav = (
        <Nav
            mode="link"
            left={["PostSys"]}
            center={[
                {
                    type: "link",
                    name: "Projects",
                    url: "/",
                    cont: "",
                },
                {
                    type: "link",
                    name: "Edit",
                    url: "/",
                    cont: "",
                },
                {
                    type: "link",
                    name: "Clear",
                    url: "/",
                    cont: "",
                },
            ]}
            onClickClear={onClickClear}
            right={[""]}
            img={[""]}
        />
    );

    const onTotalChange = (t) => {
        // only round to the nearest digit if total over 100
        if (t >= 100) {
            setTotal(Math.round(t));
        } else {
            setTotal(parseFloat(t.toFixed(2)));
        }

        // applying gst only when total cost above 5000
        if (total >= 1000) {
            setGrandTotal(parseFloat((total * 1.05).toFixed(2)));
        } else {
            setGrandTotal(total);
        }
    };

    return (
        <>
            {workspaceNav}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <MainTable
                    items={items}
                    setItems={setItems}
                    onTotalChange={onTotalChange}
                    currentItems={currentItems}
                />
                <ReceiptBar total={total} grandTotal={grandTotal} currentItems={currentItems} />
            </motion.div>
        </>
    );
}

export default Workspace;
