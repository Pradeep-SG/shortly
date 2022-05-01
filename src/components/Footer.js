import React from 'react';
import { ReactComponent as LogoSvg } from '../images/logo.svg';
import { ReactComponent as Facebook } from '../images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../images/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../images/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section-logo">
        <LogoSvg />
      </div>
      <div className="footer-section-link">
        <h5>Features</h5>
        <ul>
          <li>
            <a href="#">Link Shortening</a>
          </li>
          <li>
            <a href="#">Branded Links</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
        </ul>
      </div>
      <div className="footer-section-link">
        <h5>Resources</h5>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
      <div className="footer-section-link">
        <h5>Company</h5>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <ul className="footer-icon footer-section-link">
        <li>
          <a href="#">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="#">
            <Twitter />
          </a>
        </li>
        <li>
          <a href="#">
            <Pinterest />
          </a>
        </li>
        <li>
          <a href="#">
            <Instagram />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
