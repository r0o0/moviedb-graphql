import { getConfigs, getNowPlaying, getMovies } from './db';

const resolvers = {
  Query: {
    configs: () => getConfigs()
  },
  Configs: {
    nowplaying: (parent, { page, lang }) => getNowPlaying(parent, page, lang),
  },
  Results: {
    movies: parent => getMovies(parent)
  }
};

export default resolvers;