import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import { FaWhatsapp } from 'react-icons/fa'
import { FiImage } from 'react-icons/fi'
import { siteContent } from '../data/siteContent'
import { formatDate, toEntries } from '../lib/feed'
import Reveal from './Reveal'

function FeedCard({ entry }) {
  const [attempt, setAttempt] = useState(0)
  const src = entry.sources[attempt]
  const date = formatDate(entry.time)

  return (
    <article className="opening-card">
      <div className="opening-card__media">
        {src
          ? <img src={src} alt={entry.caption || 'Latest opening'} loading="lazy" referrerPolicy="no-referrer" onError={() => setAttempt((n) => n + 1)} />
          : <div className="opening-card__fallback"><FiImage aria-hidden="true" focusable="false" /><span>Photo unavailable</span></div>}
      </div>
      <div className="opening-card__body">
        {date && <time className="opening-card__date">{date}</time>}
        <p>{entry.caption || 'New opening posted.'}</p>
      </div>
    </article>
  )
}

function HiringFeed() {
  const [status, setStatus] = useState('loading')
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    fetch(siteContent.feedUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Feed responded ${response.status}`)
        return response.text()
      })
      .then((csv) => {
        const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true })
        setEntries(toEntries(data))
        setStatus('ready')
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setStatus('error')
      })

    return () => controller.abort()
  }, [])

  return (
    <section className="section openings" id="openings">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Now Hiring</p>
          <h2 className="section-heading">Latest openings.</h2>
          <p className="section-intro">Positions we are currently filling, posted as they open. Message us on WhatsApp to apply for any of them.</p>
        </Reveal>

        {status === 'loading' && (
          <div className="opening-grid" aria-busy="true">
            {[0, 1, 2].map((key) => <div className="opening-card opening-card--skeleton" key={key} />)}
          </div>
        )}

        {status === 'error' && (
          <div className="opening-state">
            <p>We could not load the latest openings just now.</p>
            <a className="button button--whatsapp" href={siteContent.whatsappHref} target="_blank" rel="noreferrer">
              <FaWhatsapp aria-hidden="true" focusable="false" />
              Ask us on WhatsApp
            </a>
          </div>
        )}

        {status === 'ready' && entries.length === 0 && (
          <div className="opening-state">
            <p>No openings posted yet. New positions appear here as soon as they are announced.</p>
            <a className="button button--whatsapp" href={siteContent.whatsappHref} target="_blank" rel="noreferrer">
              <FaWhatsapp aria-hidden="true" focusable="false" />
              Ask about upcoming roles
            </a>
          </div>
        )}

        {status === 'ready' && entries.length > 0 && (
          <div className="opening-grid">
            {entries.map((entry, index) => (
              <Reveal className="opening-reveal" delay={Math.min(index, 4) * 90} key={`${entry.index}-${entry.time}`}>
                <FeedCard entry={entry} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default HiringFeed
