import axios from 'axios';

const API_KEY = '25243201-da43b78e8715fb1cc3094e420';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async query => {
  const response = await axios.get(
    `/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};