import { getConfigs, getNowPlaying, getSearchResult, getMovies } from './db';

const resolvers = {
  Query: {
    configs: () => getConfigs()
  },
  Configs: {
    nowplaying: (parent, { page, lang }) => getNowPlaying(parent, page, lang),
    movieSearch: (parent, { keyword, lang }) => getSearchResult(parent, keyword, lang)
  },
  Results: {
    movies: parent => getMovies(parent)
  }
};

export default resolvers;