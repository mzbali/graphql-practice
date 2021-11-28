/* This is where our GraphQL server lives */
const { ApolloServer, gql } = require('apollo-server');
const products = require('./products');
const categories = require('./categories');

/* define how are query going to look, the way we going to fetch our data */
/* ! means non nullable, can't return null */
/* scaler type: String, Int, Float, Boolean  */
/* Here Product is a object type */
const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
  }
  type Category {
    id: ID!
    name: String!
  }
`;
/* we are gonna resolve the hello property inside our query types */
const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return 'World!'; /* returning a string 
      because that's what we,specified in our type defination */
    },
    products: (parent, args, context) => {
      /* object type */
      return products;
    },
    product: (parent, args, context) => {
      const { id } = args;
      return products.find((product) => product.id === id);
    },
    categories: (parent, args, context) => {
      return categories;
    },
    category: (parents, args, context) => {
      const { id } = args;
      return categories.find((category) => category.id === id);
    },
  },
};

/* In the server we need to specify our type defination and resolver */
const server = new ApolloServer({ typeDefs, resolvers }); //our apollo ApolloServer

server.listen().then(({ url }) => {
  console.log('server is ready at ' + url);
});
