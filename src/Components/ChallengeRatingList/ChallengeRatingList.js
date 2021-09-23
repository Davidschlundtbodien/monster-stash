import { Link } from 'react-router-dom';
import './ChallengeRatingList.css'
import {challengeRatings} from '../../data/challengeRatings'

const ChallengeRatingList = () => {
  const crList = challengeRatings.map(rating => {
    return (
      <div key={rating.title}>
        <Link to={`/monsters/${rating.param}`}>
          <p>Challenge Rating: {rating.title}</p>
        </Link>
      </div>
    )
  })

  return(
    <article>
      {crList}
    </article>
  )
}

export default ChallengeRatingList;
