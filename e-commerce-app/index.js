/* This is where our GraphQL server lives */
const { ApolloServer } = require('apollo-server');
const { Category } = require('./resolvers/Category');
const { Product } = require('./resolvers/Product');
const { Query } = require('./resolvers/Query');
const { typeDefs } = require('./schema');
/* we are gonna resolve the hello property inside our query types */

/* In the server we need to specify our type defination and resolver */
const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Product, Category },
}); //our apollo ApolloServer

server.listen().then(({ url }) => {
  console.log('server is ready at ' + url);
});
