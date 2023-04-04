import css from './Cast.module.css';
import useCredits from 'hooks/fetchCredits';
import { useParams } from 'react-router-dom';
import base from '../../../data/api.json';

const Cast = () => {
  const { movieID } = useParams();
  const { isLoading, error, credits } = useCredits(movieID);
  let castList = '';

  if (isLoading) {
    //spinner
  }

  if (error) {
    //info o błędzie
  }

  if (credits) {

    castList = credits.map(cast => {
      return (
        <li key={cast.id} className={css.listItem}>
          <img
            src={
              cast.profile_path
                ? `${base.baseImgPath}${cast.profile_path}`
                : 'https://via.placeholder.com/185x278.png?text=No+Image'
            }
            alt={cast.name}
          />
          <div>
            <span className={css.listItemInfo}>{cast.name}</span>
            <span className={css.listItemInfo}>{cast.character}</span>
          </div>
        </li>
      );
    });
  }

  return <ul>{castList}</ul>;
};

export default Cast;
