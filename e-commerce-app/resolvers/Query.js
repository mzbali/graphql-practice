const { products, categories } = require('../db');

exports.Query = {
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
  category: (parent, args, context) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
