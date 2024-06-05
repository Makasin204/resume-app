import "./Portfolio.css";
export default function Portfolio() {
  return (
    <div className="main__portfolio">
      <div className="main__portfolio__caption">
        Portfolio <span className="hero_dot">.</span>
      </div>
      <div className="main__portfolio__elements">
        <div className="portfolio-wrapper">
          <a href="https://boom-corn.com/" target="_blank">
            <div className="portfolio-element" id="boomcorn">
              <div className="portfolio-hover">Click here to see</div>
            </div>
          </a>
          <a href="https://makasin204.github.io/E-Shop/" target="_blank">
            <div className="portfolio-element" id="e-shop">
              <div className="portfolio-hover">Click here to see</div>
            </div>
          </a>
        </div>
        <div className="portfolio-wrapper">
          <a href="https://makasin204.github.io/Studrada/" target="_blank">
            <div className="portfolio-element" id="student-gov">
              <div className="portfolio-hover">Click here to see</div>
            </div>
          </a>
          <a href="https://makasin204.github.io/Woods/" target="_blank">
            <div className="portfolio-element" id="woods">
              <div className="portfolio-hover">Click here to see</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
