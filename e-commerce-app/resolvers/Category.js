exports.Category = {
  products: ({ id: categoryId }, { filter }, { db }) => {
    let filterdCategoryProducts = db.products.filter(
      (product) => product.categoryId === categoryId
    );
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale === true) {
        filterdCategoryProducts = filterdCategoryProducts.filter(
          (product) => product.onSale
        );
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filterdCategoryProducts = filterdCategoryProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          db.reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;
          return avgProductRating >= avgRating;
        });
      }
    }
    return filterdCategoryProducts;
  },
};
