import { FaStar } from 'react-icons/fa'

function StarRating({ rating = 5, max = 5, label }) {
  const filled = Math.round(Math.min(Math.max(rating, 0), max))

  return (
    <div className="star-rating" role="img" aria-label={label ?? `${filled} out of ${max} stars`}>
      {Array.from({ length: max }, (_, index) => (
        <FaStar
          className={`star-rating__star ${index < filled ? 'is-filled' : ''}`}
          key={index}
          aria-hidden="true"
          focusable="false"
        />
      ))}
    </div>
  )
}

export default StarRating
