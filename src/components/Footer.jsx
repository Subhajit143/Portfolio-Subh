import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Subhajit</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/subhajitmajumder660/profilecard/?igsh=ejEwcjAyZGV6bGcy"
           className="footer__social-link" target="_blank" rel="noreferrer">
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="www.linkedin.com/in/
subhajit-majumdar-352967325
"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="www.linkedin.com/in/
subhajit-majumdar-352967325
"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">@Subh-Official. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
