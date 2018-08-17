import { getConfigs, getNowPlaying, getSearchResult, getMovies, updateMovie } from './db';

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
  },
  Mutation: {
    post: (_, _, context, info) => {
      return context.db.mutation.createLink({
        data: {
          url: args.url,
          description: args.description,
        },
      }, movieSearch)
    },
  }
};

export default resolvers;