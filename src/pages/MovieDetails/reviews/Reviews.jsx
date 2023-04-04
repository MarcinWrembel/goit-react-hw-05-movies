import { useParams } from 'react-router-dom';
import useMovieReviews from '../../../hooks/fetchReviews';

const Reviews = () => {
  const { movieID } = useParams();
  const { isLoading, error, movieReviews } = useMovieReviews(movieID);

  if (isLoading) {
    //spinner
  }

  if (error) {
    //info o błędzie
  }

  if (movieReviews.length === 0) {
    return <h2>There is no any comment for this movie</h2>;
  }

  if (movieReviews) {
    return (
      <ul>
        {movieReviews.map(rev => (
          <li key={rev.id}>
            <article>
              <h3>{rev.author}</h3>
              <p>{rev.content}</p>
              <footer>
                <p>
                  Created at:
                  <time dateTime={rev.created_at}>
                    {' '}
                    {rev.created_at.split('T')[0]}
                  </time>
                </p>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    );
  }
};

export default Reviews;
