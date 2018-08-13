import { getConfigs, getNowPlaying, getMovies } from './db';

const resolvers = {
  Query: {
    configs: () => getConfigs(),
    nowplaying: (_, { page, lang }) => getNowPlaying(page, lang)
  },
  Results: {
    movies: parent => getMovies(parent)
  }
};

export default resolvers;