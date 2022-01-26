import axios from 'axios';

export const baseUrl = `https://${process.env.RAPIDAPI_HOST}`;

export async function fetchApi(url) {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': process.env.RAPIDAPI_HOST,
      'x-rapidapi-key': process.env.RAPIDAPI_KEY
    }
  });

  return data;
}