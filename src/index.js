import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_q290z6IlfdZAVfcy9jfPcCmeSKYGI4eCA8wnwS3pYbAHXxfPjFtlBaGCoNi0ZDvn';

// URL

function getCat(cat) {
  const Base_URL = `https://api.thecatapi.com`;
  const END_POINT = `/v1/images/search`;
  const PARAMS = `?breed_ids=${cat}`;
  const url = `${Base_URL}${END_POINT}${PARAMS}`;

  return axios
    .get(url)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error('Error fetching cat:', error);
    });
}
getCat('beng');
// URL
