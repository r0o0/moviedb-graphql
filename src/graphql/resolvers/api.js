import dotenv from 'dotenv';

dotenv.config();
const key = process.env.API_KEY;
const configs_url = `https://api.themoviedb.org/3/configuration?api_key=${key}`;
const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;
const search_url = `https://api.themoviedb.org/3/search/movie/?api_key=${key}`

export { configs_url, api_url, search_url }