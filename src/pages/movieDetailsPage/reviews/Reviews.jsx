import { useParams } from 'react-router-dom';
import useMovieReviews from '../../../hooks/fetchReviews';
import Spinner from 'components/spinner/Spinner';
import rev from './Review.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { marked } from 'marked';

//strip html tags from string
// import { stripHtml } from "string-strip-html";
// <p>{stripHtml(review.content).result}</p>

const Reviews = () => {
  const { movieID } = useParams();
  const { isLoading, error, movieReviews } = useMovieReviews(movieID);

  if (error) {
    toast.error(error);
  }

  if (movieReviews.length === 0) {
    return <h2>There is no any comment for this movie</h2>;
  }

  if (movieReviews) {
    return (
      <div className={rev.review}>
        {isLoading && <Spinner />}
        <ul className={rev.reviewList}>
          {movieReviews.map(review => (
            <li key={review.id}>
              <article className={rev.reviewListData}>
                <h3>{review.author}</h3>
                <div>{parse(marked.parse(review.content))}</div>
                <footer className={rev.reviewListArticle}>
                  <p className={rev.reviewListCreation}>
                    Created at:
                    <time dateTime={review.created_at}>
                      {' '}
                      {review.created_at.split('T')[0]}
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

Reviews.propTypes = {
  movieReviews: PropTypes.array,
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
  content: PropTypes.string,
  movieID: PropTypes.string,
};
