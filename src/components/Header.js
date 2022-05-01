import React, { useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div className={`navbar ${toggle && 'toggle'}`}>
        <img src="./images/logo.svg" alt="shortly-logo" />
        <div className={`nav-list-div`}>
          <ul className="nav-list">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing </a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <div className="navbar-auth">
            <a href="#">Login</a>
            <a className="sign-up" href="#">
              Sign Up
            </a>
          </div>
        </div>
        <div className="burger" onClick={() => setToggle(!toggle)}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
