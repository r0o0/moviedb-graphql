import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const key = process.env.API_KEY;
const configs_url = `https://api.themoviedb.org/3/configuration?api_key=${key}`;
const api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;
const search_url = `https://api.themoviedb.org/3/search/movie/?api_key=${key}`

const getConfigs = () =>
  fetch(configs_url)
    .then(res => res.json())
    .then(configs => configs.images);

const getNowPlaying = (parent, page, lang) => {
  // region
  const region = lang.substr(3, 4);
  // poster sizes
  const sizes = parent.poster_sizes;
  const size_original = sizes[sizes.length - 1];
  const size_large = sizes[sizes.length - 2];
  const size_medium = sizes[sizes.length - 3];
  const size_small = sizes[sizes.length - 4];

  return fetch(`${api_url}&page=${page}&language=${lang}&region=${region}`)
    .then(res => res.json())
    .then(data => {
      const results = {
        type: 'now playing',
        page: data.page,
        total: data.total_results,
        total_pages: data.total_pages,
        date: data.dates,
        image_url: parent.secure_base_url,
        image_original: size_original,
        image_large: size_large,
        image_medium: size_medium,
        image_small: size_small,
        movies: data.results,
      };

      return results;
    });
}

const getMovies = parent => {
  const movies = [];
  const data = parent.movies;

  data.forEach(movie => {
    const results = {
      id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      poster_hd: `${parent.image_url}${parent.image_original}${movie.poster_path}`,
      poster_large : `${parent.image_url}${parent.image_large}${movie.poster_path}`,
      poster_medium: `${parent.image_url}${parent.image_medium}${movie.poster_path}`,
      poster_small: `${parent.image_url}${parent.image_small}${movie.poster_path}`,
      vote_average: movie.vote_average,
      overview: movie.overview
    }
    movies.push(results);
  });
  return movies;
};

const getSearchResult = (parent, keyword, lang) => {
  // region
  const region = lang.substr(3, 4);
  // poster sizes
  const sizes = parent.poster_sizes;
  const size_original = sizes[sizes.length - 1];
  const size_large = sizes[sizes.length - 2];
  const size_medium = sizes[sizes.length - 3];
  const size_small = sizes[sizes.length - 4];

  return fetch(`${search_url}&query=${encodeURI(keyword)}&language=${lang}`)
    .then(res => res.json())
    .then(data => {
      const results = {
        type: "search",
        keyword: keyword,
        page : data.page,
        total : data.total_results,
        total_pages : data.total_pages,
        date : data.dates,
        image_url : parent.secure_base_url,
        image_original : size_original,
        image_large : size_large,
        image_medium : size_medium,
        image_small : size_small,
        movies : data.results,
      }
      return results;
    });
}



export { getConfigs, getNowPlaying, getMovies, getSearchResult };