import { FiGlobe, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { siteContent } from '../data/siteContent'
import Reveal from './Reveal'

const details = [
  { label: 'Phone', Icon: FiPhone, value: siteContent.phone, href: siteContent.phoneHref, note: siteContent.phoneNote },
  { label: 'Email', Icon: FiMail, value: siteContent.email, href: siteContent.emailHref, note: siteContent.emailNote },
  { label: 'Office', Icon: FiMapPin, value: siteContent.address, note: siteContent.addressNote },
  { label: 'Service Area', Icon: FiGlobe, value: siteContent.serviceArea, note: siteContent.availability },
]

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading">Plan your next journey.</h2>
          <p className="section-intro">Tell us where you need to be and we will arrange a chauffeur to match the occasion.</p>
        </Reveal>
        <div className="contact-grid">
          {details.map(({ label, Icon, value, href, note }, index) => (
            <Reveal delay={index * 100} key={label}>
              <div className="contact-card">
                <span className="contact-card__label">
                  <Icon className="contact-card__icon" aria-hidden="true" focusable="false" />
                  {label}
                </span>
                <p>{href ? <a className="contact-card__link" href={href}>{value}</a> : value}</p>
                <small>{note}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
