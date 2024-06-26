import React, { useState } from "react";

import './Nav.css'
import { Link, NavLink } from "react-router-dom";

function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">

        <Link className="nav__logo" to="/"> Your Math </Link>

        <div className={menuOpen ? "nav__menu show__menu" : "nav__menu"} id="nav-menu">
          <ul className="nav__list grid">
              <li className="nav__item">
                <NavLink className="nav__link" to="/">
                  <i className="uil uil-estate nav__icon"></i> Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/calculator">
                  <i className="uil uil-calculator nav__icon"></i> Calculate
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/functions">
                  <i className="uil uil-atom nav__icon"></i> Functions
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/account">
                  <i className="uil uil-user nav__icon"></i> Account
                </NavLink>
              </li>
          </ul>
          <span onClick={() => setMenuOpen(!menuOpen)}><i className="uil uil-times nav__close" id="nav-close"></i></span>
        </div>

        <div className="nav__btns">
          {/* Theme change button */}
          <i className="uil uil-moon change-theme" id="theme-button"></i>

          <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}  id="nav-toggle">
              <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
  
  export default Nav;