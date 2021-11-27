/* This is where our GraphQL server lives */
const { ApolloServer, gql } = require('apollo-server');
const productsData = require('./productsData');

/* define how are query going to look, the way we going to fetch our data */
/* ! means non nullable, can't return null */
/* scaler type: String, Int, Float, Boolean  */
/* Here Product is a object type */
const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
  }
  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;
/* we are gonna resolve the hello property inside our query types */
const resolvers = {
  Query: {
    hello: () => {
      return 'World!'; /* returning a string 
      because that's what we,specified in our type defination */
    },
    products: () => {
      /* object type */
      return productsData;
    },
  },
};

/* In the server we need to specify our type defination and resolver */
const server = new ApolloServer({ typeDefs, resolvers }); //our apollo ApolloServer

server.listen().then(({ url }) => {
  console.log('server is ready at' + url);
});
