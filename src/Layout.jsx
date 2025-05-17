import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer"

export default function Layout() {
  return (
    <>
        <header>
            <Link className="header_logo" to="/">
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
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

        <Outlet />

        <Footer />
    </>
  );
};
