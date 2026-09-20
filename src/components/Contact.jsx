import { FaWhatsapp } from 'react-icons/fa'
import { FiGlobe, FiMail, FiMapPin, FiPhone, FiUser } from 'react-icons/fi'
import { siteContent } from '../data/siteContent'
import Reveal from './Reveal'

const details = [
  { label: 'Contact Person', Icon: FiUser, value: siteContent.contactPersonName, note: siteContent.contactPersonRole, highlight: true },
  { label: 'Phone', Icon: FiPhone, value: siteContent.phone, href: siteContent.phoneHref, note: siteContent.phoneNote },
  { label: 'WhatsApp', Icon: FaWhatsapp, value: siteContent.phone, href: siteContent.whatsappHref, note: siteContent.whatsappNote, external: true },
  { label: 'Email', Icon: FiMail, value: siteContent.email, href: siteContent.emailHref, note: siteContent.emailNote },
  { label: 'Office', Icon: FiMapPin, value: siteContent.address, note: siteContent.addressNote },
  { label: 'Hiring Area', Icon: FiGlobe, value: siteContent.serviceArea, note: siteContent.availability },
]

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Apply</p>
          <h2 className="section-heading">Get in touch about openings.</h2>
          <p className="section-intro">For more details, contact {siteContent.contactPersonName}, {siteContent.contactPersonRole}. Tell us about your licence and driving experience, and we will match you to a placement. The quickest way to reach him is WhatsApp.</p>
          <a className="button button--whatsapp" href={siteContent.whatsappHref} target="_blank" rel="noreferrer">
            <FaWhatsapp aria-hidden="true" focusable="false" />
            Apply on WhatsApp
          </a>
        </Reveal>
        <div className="contact-grid">
          {details.map(({ label, Icon, value, href, note, external, highlight }, index) => (
            <Reveal delay={index * 100} key={label}>
              <div className={`contact-card ${highlight ? 'contact-card--highlight' : ''}`}>
                <span className="contact-card__label">
                  <Icon className="contact-card__icon" aria-hidden="true" focusable="false" />
                  {label}
                </span>
                <p>
                  {href
                    ? <a className="contact-card__link" href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{value}</a>
                    : value}
                </p>
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
