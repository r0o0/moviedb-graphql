import { getConfigs, getNowPlaying } from './db';

const resolvers = {
  Query: {
    configs: () => getConfigs(),
    nowplaying: (_, { lang }, { page }) => getNowPlaying(lang, page)
  }
};

export default resolvers;