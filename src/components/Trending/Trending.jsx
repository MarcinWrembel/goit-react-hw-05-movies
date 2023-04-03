import useTrends from 'hooks/fetchTrends';
import { Link } from 'react-router-dom';
import base from '../../data/api.json'

const TREND_URL=''.concat(base.baseUrl,'trending/movie/day?api_key=',base.KEY)

const Trending = () => {

const {trends, isLoading, error} = useTrends(TREND_URL)

if (isLoading) {
    //spinner
}

if (error) {
    //komunikat
    console.log(error);
}



  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trends.map(el => (
          <li key={el.id}>
          <Link to={`/movies/${el.title}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;


// const [trends, setTrends] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTrends = async () => {
//       setIsLoading(true);

//       try {
//         const response = await fetchMovie(url);
//         setTrends(response.results);

//         console.log(response.results);

//       } catch (error) {

//         console.log(error.message);
        
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchTrends(url);
//   }, []);
