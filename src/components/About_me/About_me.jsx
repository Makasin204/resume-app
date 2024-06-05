import "./About_me.css";
export default function About_me() {
  return (
    <div className="main__about">
        <div className="main__about__caption">
          About me <span className="hero_dot">.</span>
        </div>
        <div className="main__about__description">
          I started my way in Frontend Developing in the beginning of 2023. I
          bought a course in Logos IT Academy and rapidly finished him. During
          studying i got some lifehacks of troubleshooting and self-confidence
          in developing websites. Now I’m developing company websites, product
          websites and resumes.
        </div>
        <div className="main__about__resume">
          <div className="main__about__resume__picture"></div>
          <div className="main__about__resume__text-block">
            <div className="facts">
              <div className="options-wrapper">
                <div className="option">
                  <b>Birthday:</b> 10th December 2004
                </div>
                <div className="option">
                  <b>Age:</b> 19
                </div>
                <div className="option">
                  <b>Location:</b> L'viv, Ukraine
                </div>
                <div className="option">
                  <b>Phone:</b> +380 (67) 365 0848
                </div>
                <div className="option">
                  <b>Email:</b> mail4school.rek@gmail.com
                </div>
              </div>
              <div className="options-wrapper">
                <div className="option">
                  <b>Education:</b> L'viv Polytechnic
                </div>
                <div className="option">
                  <b>Degree:</b> Professional Pre-higher
                </div>
                <div className="option">
                  <b>Profession:</b> Computer Engineering
                </div>
                <div className="option">
                  <b>Github:</b> github.com/Makasin204
                </div>
                <div className="option">
                  <b>Freelance:</b> Available
                </div>
              </div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              metus nunc. Aenean non nulla imperdiet, pretium magna vel,
              pulvinar justo. Quisque porta tincidunt tortor, pharetra ultrices
              orci pulvinar a. Mauris suscipit tempus hendrerit. Donec sed diam
              ac dui molestie imperdiet. Ut nunc nunc, euismod nec magna non,
              ullamcorper vestibulum felis. Vivamus at faucibus risus.
            </div>
          </div>
        </div>
    </div>
  );
}
