import { getConfigs, getNowPlaying, getSearchResult} from './db';
import { getMovies } from './utils';

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