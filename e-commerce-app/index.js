/* This is where our GraphQL server lives */
const { ApolloServer } = require('apollo-server');
const { Category } = require('./resolvers/Category');
const { Product } = require('./resolvers/Product');
const { Query } = require('./resolvers/Query');
const { typeDefs } = require('./schema');
const { db } = require('./db');
/* In the server we need to specify our type defination and resolver and context */
const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Product, Category },
  context: { db }, //all the resolvers will have access to this data to resolve the query
}); //our apollo ApolloServer

server.listen().then(({ url }) => {
  console.log('server is ready at ' + url);
});
