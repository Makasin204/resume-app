import "./Header.css";
import "./MobileNav.css";
export default function Header() {
  return (
    <header>
      <div className="logo">LOGO</div>
      <div className="nav">
        <ul className="nav__list">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="../../contacts.html">Contacts</a>
          </li>
          <li>
            <a href="../../entertainment.html">Entertainment</a>
          </li>
        </ul>
      </div>
      <div className="lang">
        <span className="lang_eng active">ENG</span> / 
        <span className="lang_ukr">УКР</span>
      </div>
    </header>
  );
}

