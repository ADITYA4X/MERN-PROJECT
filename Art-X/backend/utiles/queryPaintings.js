class queryPaintings {
  paintings = [];
  query = {};
  constructor(paintings, query) {
    this.paintings = paintings;
    this.query = query;
  }

  categoryQuery = () => {
    this.paintings = this.query.category
      ? this.paintings.filter((c) => c.category === this.query.category)
      : this.paintings;
    return this;
  };

  ratingQuery = () => {
    this.paintings = this.query.rating
      ? this.paintings.filter(
          (c) =>
            parseInt(this.query.rating) <= c.rating &&
            c.rating < parseInt(this.query.rating) + 1
        )
      : this.paintings;
    return this;
  };
}

module.exports = queryPaintings;
