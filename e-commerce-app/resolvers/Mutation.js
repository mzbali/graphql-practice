const { v4: uuid } = require('uuid');
/* db is how kinda a orm works */
exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const newCategory = {
      id: uuid(),
      name: input.name,
    };
    db.categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { db }) => {
    const { name, description, quantity, price, image, onSale, categoryId } =
      input;
    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      categoryId,
    };
    db.products.push(newProduct);
    return newProduct;
  },
  addReview: (parent, { input }, { db }) => {
    const { date, title, comment, rating, productId } = input;
    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };
    db.reviews.push(newReview);
    return newReview;
  },
};
