import axios from 'axios';

const fetchMovie = async url => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {

  }
};


export default fetchMovie;
