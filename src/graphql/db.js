import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const key = process.env.API_KEY;
const configs_url = `https://api.themoviedb.org/3/configuration?api_key=${key}`;
const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;

export const getConfigs = () =>
  fetch(configs_url)
    .then(res => res.json())
    .then(configs => configs.images);

export const getNowPlaying = (page, lang) => {
  const region = lang.substr(3, 4);
  return fetch(`${api_url}&page=${page}&language=${lang}&region=${region}`)
    .then(res => res.json())
    .then(data => data);
}

export const getMovies = parent => parent.results;