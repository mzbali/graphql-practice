const { products, categories } = require('../db');

exports.Product = {
  category: (parent, args, context) => {
    const { categoryId } = parent;
    return categories.find((category) => category.id === categoryId);
  },
};
