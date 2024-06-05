import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <p className="footer__name">Maksym Rekhviashvili</p>
      <p className="footer__appreciation">Thank you for watching my website</p>
      <div className="footer__social-media">
        <a href="https://github.com/Makasin204" target="_blank">
          <div className="footer-icon" id="github-white"></div>
        </a>
        <a href="https://www.linkedin.com/in/maksym-rekhviashvili-9372102b0/" target="_blank">
          <div className="footer-icon" id="linkedin-white"></div>
        </a>
        <a href="https://t.me/rehvi_m" target="_blank">
          <div className="footer-icon" id="telegram-white"></div>
        </a>
        <a href="https://instagram.com/rehvi_m/" target="_blank">
          <div className="footer-icon" id="instagram-white"></div>
        </a>
      </div>
      <p className="footer__creator">
        Designed and created by Maksym Rekhviashvili
      </p>
    </footer>
  );
}
