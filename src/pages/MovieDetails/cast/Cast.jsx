import css from './Cast.module.css';
import useCredits from 'hooks/fetchCredits';
import { useParams } from 'react-router-dom';
import base from '../../../data/api.json';
import Spinner from 'components/spinner/Spinner';

const Cast = () => {
  const { movieID } = useParams();
  const { isLoading, error, credits } = useCredits(movieID);
  let castList = '';


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
          <div className={css.castListItemIfo}>
            <span className={css.castListItemInfo}>{cast.name}</span>
            <span className={css.castListItemInfo}>( {cast.character} )</span>
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
