import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
    return (
        <>
            <nav>
                <h1>TechGhost</h1>
                <main>
                    <Link to='/'>Home</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/#about'>About</Link>
                    <Link to='/#brands'>Brands</Link>
                </main>
            </nav>
        </>
    );
};

export default Header;
