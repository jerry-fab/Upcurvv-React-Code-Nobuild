import "./HeroSection.css";
import heroillustration from "../assets/hero-illustration.svg";

function HeroSection() {
  return (
    <section className="hero-section">
      {/* Left Column: Content Section */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span aria-hidden="true">✦</span>
          <span>Learn</span>
          <i>•</i>
          <span>Practice</span>
          <i>•</i>
          <span>Grow</span>
        </div>

        <h1>
          Your Tasks,
          <br />
          <span>Your Progress</span>
        </h1>

        <p className="hero-description">
          Complete your daily tasks, build real projects,
          <br className="desktop-break" />
          track your progress and get one step closer
          <br className="desktop-break" />
          to your dream career.
        </p>

        {/* 4 Feature Items (Hardcoded as requested) */}
        <div className="hero-features">
          <div className="hero-feature">
            <div className="feature-icon feature-blue" aria-hidden="true">
              ▣
            </div>
            <h2>Daily Tasks</h2>
            <p>
              Stay consistent
              <br />
              and improve
            </p>
          </div>

          <div className="hero-feature">
            <div className="feature-icon feature-purple" aria-hidden="true">
              &lt;/&gt;
            </div>
            <h2>Hands-on Practice</h2>
            <p>
              Build real world
              <br />
              projects
            </p>
          </div>

          <div className="hero-feature">
            <div className="feature-icon feature-green" aria-hidden="true">
              ▥
            </div>
            <h2>Track Progress</h2>
            <p>
              See your growth
              <br />
              over time
            </p>
          </div>

          <div className="hero-feature">
            <div className="feature-icon feature-pink" aria-hidden="true">
              ♧
            </div>
            <h2>Community Support</h2>
            <p>
              Learn together,
              <br />
              move forward
            </p>
          </div>
        </div>

        <div className="hero-actions">
          <a className="hero-primary-button" href="#student-tasks">
            View Your Tasks <span aria-hidden="true">→</span>
          </a>
          <a className="hero-secondary-button" href="#how-it-works">
            <span className="play-icon" aria-hidden="true">
              ▶
            </span>
            Watch How It Works
          </a>
        </div>
      </div>

      {/* Right Column: Visual Art Section (Uses position for floating elements) */}
      <div className="hero-art" aria-label="Student learning illustration">
        {/* Soft Background Radial Glow */}
        <div className="art-glow"></div>

        {/* Floating Card: Today's Tasks Preview (Hardcoded as requested) */}
        <div className="task-preview">
          <div className="task-preview-heading">
            <span className="calendar-icon" aria-hidden="true">
              ▦
            </span>
            <strong>Today's Tasks</strong>
            <span className="task-count">1/4</span>
          </div>

          <div className="task-progress">
            <span></span>
          </div>

          <div className="preview-task">
            <span className="task-check is-done">✓</span>
            <span>HTML Basics</span>
          </div>

          <div className="preview-task">
            <span className="task-check"></span>
            <span>CSS Box Model</span>
          </div>

          <div className="preview-task">
            <span className="task-check"></span>
            <span>JavaScript Loops</span>
          </div>

          <div className="preview-task">
            <span className="task-check"></span>
            <span>React Introduction</span>
          </div>
        </div>

        {/* Floating Handwritten Inspiration Note */}
        <div className="floating-note">
          Small steps
          <br />
          <strong>Big dreams</strong>
          <span aria-hidden="true">↗</span>
        </div>

        {/* Floating Book Stack */}
        <div className="book-stack" aria-hidden="true">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        {/* Central Student Illustration */}
        <img
          className="student-illustration"
          alt="Illustration of a student working on a laptop"
          src={heroillustration}
        />

        {/* Subtle Decorative Art Caption */}
        <div className="art-caption">
          <span className="caption-dot"></span>
          Keep learning. Keep growing.
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
