import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const key = process.env.API_KEY;
const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;

export const getNowPlaying = (lang, page) =>
  fetch(`${api_url}&page=${page}&language=${lang}`)
    .then(res => res.json())
    .then(data => data.results);

