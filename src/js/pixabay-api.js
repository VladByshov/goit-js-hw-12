import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '54656491-d198bfb98120e598fae018f1a';
export const perPage = 15;
axios.defaults.baseURL = BASE_URL;

export async function request(query, page = 1) {
  const response = await axios({
    url: BASE_URL,
    method: 'get',
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: perPage,
    },
  });
  return response.data;
}