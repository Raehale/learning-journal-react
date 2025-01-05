import React from "react";
import { GrNotes } from "react-icons/gr";
import { Link } from "react-router"

export default function Navbar() {
    return (
        <header>
            <Link className="header_logo" to="/">
                <GrNotes className="header_logo_icon" />
                <p className="header_logo_text">
                    My learning journal
                </p>
            </Link>
            <div className="header_menu">
                <nav>
                    <ul className="menu_nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}