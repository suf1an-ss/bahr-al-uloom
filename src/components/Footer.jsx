import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { siteContent } from '../data/siteContent'

const socialIcons = { facebook: FaFacebookF, instagram: FaInstagram, tiktok: FaTiktok }

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <span className="footer-brand">{siteContent.companyName}</span>
        <ul className="footer-social">
          {siteContent.social.map(({ id, label, href }) => {
            const Icon = socialIcons[id]
            return (
              <li key={id}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={`${siteContent.companyName} on ${label}`}>
                  <Icon aria-hidden="true" focusable="false" />
                </a>
              </li>
            )
          })}
        </ul>
        <p className="footer-note">&copy; {year} {siteContent.companyName}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
