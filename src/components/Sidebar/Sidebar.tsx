import "./Sidebar.css";
import Logo from "../../assets/logo.svg"
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);

    const currentYear = new Date().getFullYear() ;

    return (
        <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
            <Link to="/" className="nav__logo">
                <img src={Logo} alt="" />
            </Link>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link">
                                <i className="icon-home"></i>
                                <p className="nav__title">HOME</p>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <a href="/#about" className="nav__link">
                                <i className="icon-user-following"></i>
                                <p className="nav__title">ABOUT</p>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/#services" className="nav__link">
                                <i className="icon-briefcase"></i>
                                <p className="nav__title">SERVICES</p>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/#blog" className="nav__link">
                                <i className="icon-note"></i>
                                <p className="nav__title">BLOGS</p>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/#contact" className="nav__link">
                                <i className="icon-bubble"></i>
                                <p className="nav__title">CONTACT</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">&copy; {currentYear} - {currentYear+1}</span>
            </div>
        </aside>

        <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
            <i className="icon-menu"></i>
        </div>
        </>
    );
}

export default Sidebar;