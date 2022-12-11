import React, { useRef } from "react";
import { useNavigate } from "react-router";
import "./Navbar.scss";

const Navbar = () => {
    const menu = ["home", "destination", "crew", "technology"];
    const navigate = useNavigate();
    const mobileNav = useRef();
    const button = useRef();
    const toggleBtn = () => {
        const btn = button.current;
        const nav = mobileNav.current;
        if (nav.dataset.visible === "false") {
            btn.setAttribute("src", "/assets/shared/icon-close.svg");
            nav.setAttribute("data-visible", true);
        } else if (nav.dataset.visible === "true") {
            btn.setAttribute("src", "/assets/shared/icon-hamburger.svg");
            nav.setAttribute("data-visible", false);
        }
    };
    const goToPage = (e) => {
        const currentPage = e.target;
        button.current.click();
        currentPage.style.borderBottom = "1px solid";
        if (currentPage.dataset.page === "home") {
            navigate("/");
        } else {
            navigate(`/${currentPage.dataset.page}`);
        }
    };
    return (
        <header>
            <div className="nav-logo">
                <img src="/assets/shared/logo.svg" alt="logo" />
                <span></span>
            </div>
            <nav className="nav-menu">
                <img
                    ref={button}
                    src="/assets/shared/icon-hamburger.svg"
                    alt="toggle menu"
                    onClick={toggleBtn}
                />
                <ul ref={mobileNav} data-visible="false">
                    {menu.map((item, index) => (
                        <li
                            key={index}
                            data-page={item}
                            onClick={(e) => goToPage(e)}>
                            <span>{`0${index}`}</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
