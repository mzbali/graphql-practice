exports.Category = {
  products: ({ id: categoryId }, { filter }, { db }) => {
    let filterdCategoryProduct = db.products.filter(
      (product) => product.categoryId === categoryId
    );
    if (filter.onSale === true) {
      return filterdCategoryProduct.filter((product) => product.onSale);
    }
    return filterdCategoryProduct;
  },
};
