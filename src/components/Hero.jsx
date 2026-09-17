const ROUTE = 'M35 239 C105 197 115 92 211 123 S328 235 400 167 S445 85 492 49'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">CHAUFFEUR JOBS ACROSS THE UAE</p>
          <h1>Join our team of <span>professional chauffeurs.</span></h1>
          <p className="hero__description">Bahr Al Uloom places licensed drivers into steady chauffeur roles with VIP and corporate clients across the UAE. If you drive well and present well, we want to hear from you.</p>
          <div className="hero__actions">
            <a className="button" href="#contact">Apply Now</a>
            <a className="button button--ghost" href="#openings">View Latest Openings</a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__route-card">
            <span className="hero__route-label">Driving Roles UAE-Wide</span>
            <svg className="hero__route-map" viewBox="0 0 520 320" role="img" aria-label="A chauffeured car travelling along a route">
              <path className="hero__route-shadow" d={ROUTE} />
              <path className="hero__route-line" d={ROUTE} />
              <path className="hero__route-progress" d={ROUTE} />
              <circle className="hero__route-point" cx="35" cy="239" r="7" />
              <circle className="hero__route-point" cx="492" cy="49" r="7" />
              <g className="hero__route-car">
                <ellipse className="hero__route-car-glow" cx="0" cy="-1" rx="17" ry="3.4" />
                <circle className="hero__route-car-wheel" cx="-9" cy="-2.5" r="2.3" />
                <circle className="hero__route-car-wheel" cx="9" cy="-2.5" r="2.3" />
                <path
                  className="hero__route-car-body"
                  d="M-15 -4.4 C-15 -6.3 -14.1 -7.2 -11.8 -7.6 L-7.9 -8.3 C-6.1 -10.9 -3.3 -12.2 0.3 -12.2 C3.9 -12.2 6.7 -10.9 8.7 -8.4 L11.7 -7.9 C13.9 -7.4 15 -6.3 15 -4.3 L15 -3.4 C15 -2.8 14.5 -2.4 13.8 -2.4 L-13.8 -2.4 C-14.5 -2.4 -15 -2.8 -15 -3.4 Z"
                />
                <path className="hero__route-car-glass" d="M-5.9 -8.1 C-4.4 -10.3 -2.4 -11.2 0.1 -11.2 L0.1 -8.1 Z" />
                <path className="hero__route-car-glass" d="M1.6 -11.2 C3.9 -11.1 5.7 -10.1 7.1 -8.1 L1.6 -8.1 Z" />
              </g>
            </svg>
            <span className="hero__route-caption">Steady placements, from one client to the next.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
