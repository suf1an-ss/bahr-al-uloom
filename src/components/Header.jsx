import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { siteContent } from '../data/siteContent'
import logo from '../assets/brand/bahr-al-uloom-logo.png'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Roles', href: '#services' },
  { label: 'Openings', href: '#openings' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Apply', href: '#contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frameId
    const update = () => {
      frameId = undefined
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? Math.min(window.scrollY / height, 1) : 0)
    }
    const request = () => { if (!frameId) frameId = window.requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="scroll-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
      <div className="container nav-wrap">
        <a className="brand" href="#home" onClick={close}>
          <img className="brand-logo" src={logo} alt="" />
          <span className="brand-name">{siteContent.brandName}</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a className={`nav-link ${item.href === '#contact' ? 'nav-cta' : ''}`} href={item.href} key={item.label}>{item.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="whatsapp-btn" href={siteContent.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
            <FaWhatsapp aria-hidden="true" focusable="false" />
            <span className="whatsapp-btn__text">WhatsApp</span>
          </a>
          <button className="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      <nav className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        {navigation.map((item, index) => (
          <a className="nav-link" style={{ '--menu-delay': `${index * 55}ms` }} href={item.href} key={item.label} onClick={close}>{item.label}</a>
        ))}
      </nav>
    </header>
  )
}

export default Header
