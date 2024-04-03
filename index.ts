import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Book {
    id : ID!
    title: String!
    author: String!
    writedAt: String!
    name: String!
  }

  type Cartoon {
    id : ID!
    title : String!
  }

  type Test {
    id : ID!
    title : String!
  }

  type Mutation { 
    addtest(title: String!):test
    updateTest(TestID : ID!)
  }

  type updateTestResponse {
    code : Int!
    success : Boolean!
    message : String!
  }

  type Query {
    books: [Book]!
    cartoons: [Cartoon]!
    tests: [Test]!
  }
`;

const test = [
    {
        id : 321,
        title : "Test"
    }
]

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

const resolvers = {
    Query: {
      books: () => books,
      cartoons: () => cartoons,
      tests: () => test
    },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);