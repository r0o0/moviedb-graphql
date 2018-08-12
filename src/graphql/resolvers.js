import { getNowPlaying } from './db';

const resolvers = {
  Query: {
    nowplaying: (_, { lang }, { page }) => getNowPlaying(lang, page)
  }
};

export default resolvers;