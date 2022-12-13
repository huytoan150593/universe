import React from "react";
import "./Title.scss";
import { motion as m } from "framer-motion";

const SubHeading = ({ children }) => {
    return (
        <m.p
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="sub-heading">
            {children}
        </m.p>
    );
};

export default SubHeading;
