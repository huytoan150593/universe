import React from "react";
import "./BodyText.scss";
import { motion as m } from "framer-motion";

const BodyText = ({ children, type }) => {
    return (
        <m.p
            className={`body-text ${type}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}>
            {children}
        </m.p>
    );
};

export default BodyText;
