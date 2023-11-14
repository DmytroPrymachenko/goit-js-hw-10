import axios from 'axios';

const key =
  'live_q290z6IlfdZAVfcy9jfPcCmeSKYGI4eCA8wnwS3pYbAHXxfPjFtlBaGCoNi0ZDvn';
axios.defaults.headers.common['x-api-key'] = key;

export function getCets() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.error('Error fetching cat:', error);
    });
}

export function getCat(cat) {
  const Base_URL = `https://api.thecatapi.com`;
  const END_POINT = `/v1/images/search`;
  const PARAMS = `?breed_ids=${cat}`;
  const url = `${Base_URL}${END_POINT}${PARAMS}`;

  return axios
    .get(url)
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.error('Error fetching cat:', error);
    });
}
