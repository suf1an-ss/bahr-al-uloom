import Reveal from './Reveal'

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <Reveal>
          <p className="eyebrow">About Bahr Al Uloom</p>
          <h2 className="section-heading">We find the work. You do the driving.</h2>
          <p className="section-intro">Bahr Al Uloom connects professional drivers with VIP and corporate clients across the UAE. We handle the client relationships, the scheduling, and the paperwork, so our chauffeurs can focus on driving and keep earning steadily.</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="value-panel">
            <div className="value-item">
              <strong>Steady Placements</strong>
              <span>Consistent work with established clients, not one-off trips you have to chase.</span>
            </div>
            <div className="value-item">
              <strong>VIP &amp; Corporate Clients</strong>
              <span>We place our chauffeurs with businesses and private clients who value professionalism.</span>
            </div>
            <div className="value-item">
              <strong>Support Behind You</strong>
              <span>A recruitment team that answers quickly and backs you up once you are placed.</span>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="marquee" tabIndex="0" aria-label="Now hiring professional chauffeurs across the UAE">
        <div className="marquee-track">
          <span>NOW HIRING CHAUFFEURS</span><i>*</i><span>UAE-WIDE PLACEMENTS</span><i>*</i>
          <span>NOW HIRING CHAUFFEURS</span><i>*</i><span>UAE-WIDE PLACEMENTS</span><i>*</i>
        </div>
      </div>
    </section>
  )
}

export default About
