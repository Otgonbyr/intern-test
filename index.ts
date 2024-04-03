import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  
  type Book {
    id : ID
    title: String
    author: String
    writedAt: String
    name: String
  }

  type Cartoon {
    id : ID
    title : String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {
    books: [Book]!
    cartoons: [Cartoon]
  }
`;

const books = [
    {
    id : 123,
      title: 'The Awakening',
      author: 'Kate Chopin',
      writedAt : "12.9.2023",
      name: "asd"
    },
    {
        id : 12, 
      title: 'City of Glass',
      author: 'Paul Auster',
      writedAt : "12.9.2023",
      name: "asd"
    },
  ];

  const cartoons = [
    {
    id : 123,
      title: 'CNN'
    },
    {
        id : 12, 
      title: 'Looney'
    },
  ];

  // Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: () => books,
      cartoons: () => cartoons
    },
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });


  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);