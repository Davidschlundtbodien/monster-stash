import { Link } from 'react-router-dom';
import './ChallengeRatingList.css'
import {challengeRatings} from '../../data/challengeRatings'

const ChallengeRatingList = () => {
  const crList = challengeRatings.map(rating => {
    return (
      <Link to={`/monsters/${rating.param}`} key={rating.title} className="rating-list-item">
        <p>Challenge Rating: {rating.title}</p>
      </Link>
    )
  })

  return(
    <article className="rating-list-container">
      {crList}
    </article>
  )
}

export default ChallengeRatingList;
