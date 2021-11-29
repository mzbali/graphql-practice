/* define how are query going to look, the way we going to fetch our data */
/* ! means non nullable, can't return null */
/* scaler type: String, Int, Float, Boolean  */
/* Here Product is a object type */
const { gql } = require('apollo-server');
exports.typeDefs = gql`
  type Query {
    products(filter: Filter): [Product!]!
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
    category: Category
    reviews: [Review]!
  }
  type Category {
    id: ID!
    name: String!
    products(filter: Filter): [Product!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
  input Filter {
    onSale: Boolean
  }
`;
