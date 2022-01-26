import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export async function fetchApi(url) {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'bbcc50c633msha9a7bca7f376c8fp1d2adcjsn857ca474821f'
    }
  });

  return data;
}