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

  searchQuery = () => {
    this.paintings = this.query.searchValue
      ? this.paintings.filter(
          (p) =>
            p.name.toUpperCase().indexOf(this.query.searchValue.toUpperCase()) >
            -1
        )
      : this.paintings;
    return this;
  };

  priceQuery = () => {
    this.paintings = this.paintings.filter(
      (p) =>
        (p.price >= this.query.lowPrice) & (p.price <= this.query.highPrice)
    );
    return this;
  };
  sortByPrice = () => {
    if (this.query.sortPrice) {
      if (this.query.sortPrice === "low-to-high") {
        this.paintings = this.paintings.sort(function (a, b) {
          return a.price - b.price;
        });
      } else {
        this.paintings = this.paintings.sort(function (a, b) {
          return b.price - a.price;
        });
      }
    }
    return this;
  };

  skip = () => {
    let { pageNumber } = this.query;
    const skipPage = (parseInt(pageNumber) - 1) * this.query.perPage;
    let skipPainting = [];

    for (let i = skipPage; i < this.paintings.length; i++) {
      skipPainting.push(this.paintings[i]);
    }
    this.paintings = skipProduct;
    return this;
  };

  limit = () => {
    let temp = [];
    if (this.paintings.length > this.query.perPage) {
      for (let i = 0; i < this.query.perPage; i++) {
        temp.push(this.paintings[i]);
      }
    } else {
      temp = this.paintings;
    }
    this.paintings = temp;
    return this;
  };

  getPaintings = () => {
    return this.paintings;
  };

  countPaintings = () => {
    return this.paintings.length;
  };
}

module.exports = queryPaintings;
