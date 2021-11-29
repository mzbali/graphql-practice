/* define how are query going to look, the way we going to fetch our data */
/* ! means non nullable, can't return null */
/* scaler type: String, Int, Float, Boolean  */
/* Here Product is a object type */
const { gql } = require('apollo-server');
exports.typeDefs = gql`
  type Query {
    products(filter: ProductsInputFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    addReview(input: AddReviewInput!): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
  }

  type Product {
    id: ID!
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
    products(filter: ProductsInputFilter): [Product!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
  input ProductsInputFilter {
    onSale: Boolean
    avgRating: Int
  }
  input AddCategoryInput {
    name: String!
  }
  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: ID!
  }
  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
`;
