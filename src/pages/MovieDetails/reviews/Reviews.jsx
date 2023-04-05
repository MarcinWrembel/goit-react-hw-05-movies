import { useParams } from 'react-router-dom';
import useMovieReviews from '../../../hooks/fetchReviews';
import Spinner from 'components/spinner/Spinner';
import css from './Review.module.css'

const Reviews = () => {
  const { movieID } = useParams();
  const { isLoading, movieReviews } = useMovieReviews(movieID);


  if (movieReviews.length === 0) {
    return <h2>There is no any comment for this movie</h2>;
  }

  if (movieReviews) {
    return (
      <div>
        {isLoading && <Spinner />}
        <ul className={css.reviewList}>
          {movieReviews.map(rev => (
            <li key={rev.id}>
              <article>
                <h3>{rev.author}</h3>
                <p>{rev.content}</p>
                <footer className={css.reviewListArticle}>
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
      </div>
    );
  }
};

export default Reviews;
