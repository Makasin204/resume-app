import "./Hero.css";
import React, { useRef } from 'react';

export default function Hero() {
  return (
    <div className="main__hero">
      <div className="main__text-block">
        <div className="main__text-block__name">
          Hello there!
          <br />
          I'm Maksym Rekhviashvili
        </div>
        <div className="main__hero__text-block__position">
          Frontend
          <br />
          Developer <span className="hero_dot">.</span>
        </div>
        <div className="main__hero__text-block__description">
          Front End Developer with a great desire to learn something new and
          improve my skills. I have many goals that I want to achieve. Team
          player. Really sociable and open person. Ready for every tasks in my
          field.
        </div>
        <div className="main__hero__social-media">
        <a href="https://github.com/Makasin204" target="_blank">
            <div className="social-media-icon" id="github"></div>
          </a>
          <a href="https://www.linkedin.com/in/maksym-rekhviashvili-9372102b0/" target="_blank">
          <div className="social-media-icon" id="linkedin"></div>
          </a>
          <a href="https://t.me/rehvi_m" target="_blank">
          <div className="social-media-icon" id="telegram"></div>
          </a>
          <a href="https://instagram.com/rehvi_m/" target="_blank">
          <div className="social-media-icon" id="instagram"></div>
          </a>
        </div>
        <button className="main__hero__contact-button">Contacts</button>
      </div>
      <div className="main__hero__picture"></div>
    </div>
  );
}
