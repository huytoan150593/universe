import React from "react";
import "./Title.scss";
import { motion as m } from "framer-motion";

const Heading = ({ children, type }) => {
    return (
        <m.pre
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={type}>
            {children}
        </m.pre>
    );
};

export default Heading;
