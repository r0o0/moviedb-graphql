import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: "src/graphql/schema.graphql",
  resolvers
});

const options = {
  port: 7293,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground'
}

// server.start(options, ({port}) => console.log(`Server started, listening on port ${port} for incoming requests.`,),)

server.start(options, ({ port }) => console.log(`Graphql Server is Running on http://localhost:${port}/playground :>`))