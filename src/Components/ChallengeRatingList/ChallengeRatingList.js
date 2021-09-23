import './ChallengeRatingList.css'
import {challengeRatings} from '../../data/challengeRatings'

const ChallengeRatingList = () => {
  const crList = challengeRatings.map(rating => {
    return (
      <div key={rating.title}>
        <p>Challenge Rating: {rating.title}</p>
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
