exports.Query = {
  products: (parent, { filter }, { db }) => {
    /* object type */
    if (filter?.onSale === true) {
      return db.products.filter((product) => product.onSale);
    }
    return db.products;
  },
  product: (parent, { id }, { db }) => {
    return db.products.find((product) => product.id === id);
  },
  categories: (parent, args, { db }) => {
    return db.categories;
  },
  category: (parent, { id }, { db }) => {
    return db.categories.find((category) => category.id === id);
  },
};
