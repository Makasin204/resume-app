import React, { useEffect } from 'react';
import "./Contacts.css";
// import Email from "../../../public/js/smtp.js"


export default function Contacts() {
  useEffect(() => {
    
    function Submit() {
      let name = document.getElementById("input-name").value;
      let email = document.getElementById("input-email").value;
      let message = document.getElementById("input-message").value;
      console.log('Name: ', name)
      console.log('Email: ', email)
      console.log('Message: ', message)
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "fromthehell204@gmail.com",
        Password : "2A584D41FC7858DE9AE27DCAEC5AE5B247F4",
        To : 'mail4school.rek@gmail.com',
        From : "fromthehell204@gmail.com",
        Subject : "Mail from website!",
        Body : `Name: ${name}, Email: ${email}, Message: ${message}`
      }).then(
        message => alert(message)
      );
    }

    const submitButton = document.querySelector(".submit-button");
    if (submitButton) {
      submitButton.addEventListener("click", Submit);
    }

    return () => {
      if (submitButton) {
        submitButton.removeEventListener("click", Submit);
      }
    };
  }, []);

  return (
    <div className="main__contacts">
      <div className="main__contacts__caption">
        Contacts <span className="hero_dot">.</span>
      </div>
      <div className="contact-block">
        <div className="info">
          <div className="info-element">
            <div className="element-icon">
              <div className="icon" id="icon-location"></div>
            </div>
            <div className="element-text">
              <p className="info-element-caption">
                Location<span className="hero_dot">:</span>
              </p>
              <p className="info-element-description">
                171 Pasichna St., L’viv, Ukraine
              </p>
            </div>
          </div>
          <div className="info-element">
            <div className="element-icon">
              <div className="icon" id="icon-mail"></div>
            </div>
            <div className="element-text">
              <p className="info-element-caption">
                Email<span className="hero_dot">:</span>
              </p>
              <p className="info-element-description">
                mail4school.rek@gmail.com
              </p>
            </div>
          </div>

          <div className="info-element">
            <div className="element-icon">
              <div className="icon" id="icon-phone"></div>
            </div>
            <div className="element-text">
              <p className="info-element-caption">
                Phone<span className="hero_dot">:</span>
              </p>
              <p className="info-element-description">+38 (067) 365 0848</p>
            </div>
          </div>
        </div>
        <form action="form" className="form">
          <div className="form-wrapper">
            <input type="text" placeholder="Your name" className="input-1" id="input-name" />
            <input type="email" placeholder="Your email" className="input-1" id="input-email" />
          </div>
          <textarea placeholder="Your message" className="input-2" id="input-message" />
          <button type="button" className="submit-button">
            Send
          </button>
        </form>
      </div>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </div>
  );
}
