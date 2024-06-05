import React, { useEffect } from "react";
import "./Header.css";
import "./MobileNav.css";
import { openNav, closeNav } from "./menuFunctions";
// import { EngToUkr, UkrToEng } from "../../js/language";"../../js/language.js";
export default function Header() {
  useEffect(() => {
    // Добавлення обробників подій
    const openBtn = document.querySelector(".openbtn");
    const closeBtn = document.querySelector(".closebtn");
    
    if (openBtn) {
      openBtn.addEventListener("click", openNav);
    }
    
    if (closeBtn) {
      closeBtn.addEventListener("click", closeNav);
    }
    
    // Прибирання обробників подій при демонтажі компоненту
    return () => {
      if (openBtn) {
        openBtn.removeEventListener("click", openNav);
      }
      if (closeBtn) {
        closeBtn.removeEventListener("click", closeNav);
      }
    };
  }, []);
  return (
    <header>
      <div className="logo">LOGO</div>
      <div id="myNav" className="overlay">
  <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
  <div className="overlay-content">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>

</div>
<span onClick="openNav()">open</span>
      <div className="nav">
        <ul className="nav__list">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#">Entertainment</a>
          </li>
        </ul>
      </div>
      <div className="theme-switch"></div>
      <div className="lang">
        <span className="lang_eng active">ENG</span> / 
        <span className="lang_ukr">УКР</span>
      </div>
    </header>
  );
}

