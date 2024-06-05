import "./Resume.css";
export default function Resume() {
  return (
    
    <div className="main__resume">
      <div className="main__resume__caption">
        Resume <span className="hero_dot">.</span>
      </div>
      <div className="resume-wrapper">
        <div className="main__resume__column">
          <div className="element-caption">Summary</div>
          <div className="element">
            <div className="step">
              <div className="circle"></div>
              <div className="line" id="line-1"></div>
            </div>
            <div className="text-block">
              <div className="step-caption">Maksym Rekhviashvili</div>
              <div className="step-description">
                A Junior Front-End Developer creates and maintains the visual
                and interactive elements of websites using HTML, CSS, and
                JavaScript. They ensure responsive design for various devices,
                test for cross-browser compatibility, and collaborate with
                designers and back-end developers. Key skills include
                proficiency in front-end technologies, version control with Git,
                and understanding basic UI/UX principles. Strong communication,
                problem-solving, and adaptability are essential. Continuous
                learning and participating in code reviews help them grow in
                their role.
              </div>
            </div>
          </div>
          <div className="element-caption">Education</div>
          <div className="element">
            <div className="step">
              <div className="circle"></div>
              <div className="line" id="line-2"></div>
            </div>
            <div className="text-block">
              <div className="step-caption">L'viv Polytechnic</div>
              <div className="step-description">
                <b>2020-2024</b>
                <br />
                Professional Pre-higher Education.
                <br />
                Profession - Computer Engineering.
              </div>
            </div>
          </div>
          <div className="element">
            <div className="step">
              <div className="circle"></div>
              <div className="line" id="line-2"></div>
            </div>
            <div className="text-block">
              <div className="step-caption">Logos IT Academy</div>
              <div className="step-description">
                <b>2023-2024</b>
                <br />
                Frontend Developing course.
                <br />
                HTML, CSS, SASS, JS, Git, etc.
              </div>
            </div>
          </div>
          <div className="element">
            <div className="step" id="step-margin">
              <div className="circle"></div>
              <div className="line" id="line-3"></div>
            </div>
            <div className="text-block">
              <div className="step-caption">IT Step Academy</div>
              <div className="step-description">
                <b>2015-2018</b>
                <br />
                Basic PC course:
                <br />
                Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator.
                <br />
                3Ds Max.
                <br />
                C++ Programming.
              </div>
            </div>
          </div>
        </div>
        <div className="main__resume__column">
          <div className="element-caption">Hobies</div>
          <div className="element">
            <div className="step">
              <div className="circle"></div>
              <div className="line" id="line-4"></div>
            </div>
            <div className="text-block">
              <div className="step-caption">Sport</div>
              <div className="step-description">Basketball, Gym, Swimming</div>
            </div>
          </div>
          <div className="element-caption"> Languages</div>
          <div className="element">
            <div className="step">
              <div className="circle"></div>
              <div className="line" id="line-4"></div>
            </div>
            <div className="text-block">
              <div className="step-caption">English</div>
              <div className="step-description">B2 level</div>
            </div>
          </div>
          <div className="element">
            <div className="step">
              <div className="circle"></div>
              <div className="line" id="line-4"></div>
            </div>
            <div className="text-block">
              <div className="step-caption">Ukrainian</div>
              <div className="step-description">Native</div>
            </div>
          </div>
          <div className="element-caption"> Experience</div>
          <div className="element">
            <div className="step">
              <div className="circle"></div>
              <div className="line" id="line-5"></div>
            </div>
            <div className="text-block">
              <div className="step-caption">Developing</div>
              <div className="step-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sed metus nunc. Aenean non nulla imperdiet, pretium magna vel,
                pulvinar justo. Quisque porta tincidunt tortor, pharetra
                ultrices orci pulvinar a. Mauris suscipit tempus hendrerit.
                Donec sed diam ac dui molestie imperdiet. Ut nunc nunc, euismod
                nec magna non, ullamcorper vestibulum felis. Vivamus at faucibus
                risus.
              </div>
            </div>
          </div>
          <div className="element">
            <div className="step">
              <div className="circle"></div>
              <div className="line" id="line-5"></div>
            </div>
            <div className="text-block">
              <div className="step-caption">Developing</div>
              <div className="step-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sed metus nunc. Aenean non nulla imperdiet, pretium magna vel,
                pulvinar justo. Quisque porta tincidunt tortor, pharetra
                ultrices orci pulvinar a. Mauris suscipit tempus hendrerit.
                Donec sed diam ac dui molestie imperdiet. Ut nunc nunc, euismod
                nec magna non, ullamcorper vestibulum felis. Vivamus at faucibus
                risus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
