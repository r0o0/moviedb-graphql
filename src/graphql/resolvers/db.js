import fetch from 'node-fetch';
import { configs_url, api_url, search_url } from './api'; 
import { movie } from './utils';

// api configurations
const getConfigs = () =>
  fetch(configs_url)
    .then(res => res.json())
    .then(configs => configs.images);

// api now playing movies
const getNowPlaying = (parent, page, lang) => {
  // region
  const region = lang.substr(3, 4);

  return fetch(`${api_url}&page=${page}&language=${lang}&region=${region}`)
    .then(res => res.json())
    .then(data => {
      const results = {
        type: 'now playing',
        page: data.page,
        total: data.total_results,
        total_pages: data.total_pages,
        date: data.dates,
        results: movie(parent, data)
      };

      return results;
    });
}

// api search by keyword
const getSearchResult = (parent, keyword, lang) => {
  // region
  const region = lang.substr(3, 4);

  return fetch(`${search_url}&query=${encodeURI(keyword)}&language=${lang}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(movie)
      const results = {
        type: "search",
        keyword: keyword,
        page : data.page,
        total : data.total_results,
        total_pages : data.total_pages,
        date : data.dates,
        results: movie(parent, data)
      }
      return results;
    });
};

export { getConfigs, getNowPlaying, getSearchResult };