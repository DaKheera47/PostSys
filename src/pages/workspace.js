import React, { useContext, useEffect, useState } from "react";
import MainTable from "../components/MainTable";
import ReceiptBar from "../components/ReceiptBar";
import { motion } from "framer-motion";
import { ItemContext } from "../contexts/ItemsContext";
import Nav from "../components/Nav";

function Workspace() {
    const [items, setItems] = useContext(ItemContext);

    const [total, setTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        document.title = "Workspace | Postsys";
    }, []);

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
            right={[""]}
            img={[""]}
        />
    );

    const onTotalChange = (total) => {
        console.log(total);
        setTotal(parseFloat(total.toFixed(2)));
        setGrandTotal(parseFloat((total * 1.05).toFixed(2)));
    };

    return (
        <>
            {workspaceNav}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <MainTable items={items} setItems={setItems} onTotalChange={onTotalChange} />
                <ReceiptBar total={total} grandTotal={grandTotal} />
            </motion.div>
        </>
    );
}

export default Workspace;
