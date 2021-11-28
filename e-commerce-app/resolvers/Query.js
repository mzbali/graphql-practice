exports.Query = {
  products: (parent, args, { products }) => {
    /* object type */
    return products;
  },
  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
};
