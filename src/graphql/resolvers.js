import { getConfigs, getNowPlaying } from './db';

const resolvers = {
  Query: {
    configs: () => getConfigs(),
    nowplaying: (_, { page, lang }) => getNowPlaying(page, lang)
  },
  Results: {
    movies: (root) => root.results
  }
};

export default resolvers;