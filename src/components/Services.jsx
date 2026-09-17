import { siteContent } from '../data/siteContent'
import Reveal from './Reveal'

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Driving Roles</p>
          <h2 className="section-heading">The kinds of placements we recruit for.</h2>
          <p className="section-intro">{siteContent.servicesIntro}</p>
        </Reveal>
        <div className="service-grid">
          {siteContent.services.map((service, index) => (
            <Reveal className="service-reveal" delay={index * 100} key={service.title}>
              <article className="service-card" tabIndex="0">
                <span className="service-number">0{index + 1}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
