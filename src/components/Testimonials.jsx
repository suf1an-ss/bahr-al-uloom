import { FiAlertCircle } from 'react-icons/fi'
import { siteContent } from '../data/siteContent'
import Reveal from './Reveal'
import StarRating from './StarRating'

function Testimonials() {
  return (
    // TODO: Replace with real driver testimonials before launch
    <section className="section reviews" id="reviews">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Reviews</p>
          <h2 className="section-heading">What our drivers say.</h2>
          <p className="section-intro">Feedback from chauffeurs we have placed with clients across the UAE.</p>
          <p className="placeholder-note">
            <FiAlertCircle aria-hidden="true" focusable="false" />
            Placeholder content — real reviews pending
          </p>
        </Reveal>
        <div className="review-grid">
          {siteContent.testimonials.map((review, index) => (
            <Reveal className="review-reveal" delay={Math.min(index, 3) * 90} key={review.id}>
              <article className="review-card">
                <StarRating rating={review.rating} label={`${review.name}: ${review.rating} out of 5 stars`} />
                <p className="review-card__quote">{review.quote}</p>
                <footer className="review-card__author">
                  <span className="review-card__name">{review.name}</span>
                  <span className="review-card__role">{review.role}</span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
