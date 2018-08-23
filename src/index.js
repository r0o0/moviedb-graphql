import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: "src/graphql/schema.graphql",
  resolvers,
  context: req => ({ 
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466',
      debug: true
    })
  })
});

server.start(() => console.log("Graphql Server is Running on localhost:4000 :>"));