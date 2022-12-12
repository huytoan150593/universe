import React from "react";
import "./Title.scss";

const Heading = ({ title, type }) => {
    return <p className={type}>{title}</p>;
};

export default Heading;
