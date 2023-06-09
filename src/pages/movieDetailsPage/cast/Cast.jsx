import css from './Cast.module.css';
import useCredits from 'hooks/fetchCredits';
import { useParams } from 'react-router-dom';
import base from '../../../data/api.json';
import Spinner from 'components/spinner/Spinner';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const Cast = () => {
  const { movieID } = useParams();
  const { isLoading, error, credits } = useCredits(movieID);
  let castList = '';

  if (error) {
    toast.error(error);
  }

  if (credits) {
    castList = credits.map(cast => {
      return (
        <li key={cast.id} className={css.castListItem}>
          <img
            src={
              cast.profile_path
                ? `${base.baseImgPath}${cast.profile_path}`
                : 'https://via.placeholder.com/185x278.png?text=No+Image'
            }
            alt={cast.name}
            className={css.castListItemImg}
          />
          <div className={css.castListItemInfo}>
            <span className={css.castListItemInfoDet}>{cast.name}</span>
            <span className={css.castListItemInfoDet}>
              {cast.character.length > 1 && `( ${cast.character} )`}
            </span>
          </div>
        </li>
      );
    });
  }

  return (
    <div className={css.castList}>
      {isLoading && <Spinner />}
      <ul className={css.castList}>{castList}</ul>
    </div>
  );
};

export default Cast;

Cast.propTypes = {
  credits: PropTypes.array,
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string,
  charater: PropTypes.string,
  castList: PropTypes.func,
  movieID: PropTypes.string,
};
