const categoryModel = require("../../models/categoryModel");
const paintingModel = require("../../models/paintingModel");
const { responseReturn } = require("../../utiles/response");
const { queryPaintings } = require("../../utiles/queryPaintings");

class homeControllers {
  formatePainting = (paintings) => {
    const paintingArray = [];
    let i = 0;
    while (i < paintings.length) {
      let temp = [];
      let j = i;
      while (j < i + 3) {
        if (paintings[j]) {
          temp.push(paintings[j]);
        }
        j++;
      }
      paintingArray.push([...temp]);
      i = j;
    }
    return paintingArray;
  };

  get_categorys = async (req, res) => {
    try {
      const categorys = await categoryModel.find({});
      responseReturn(res, 200, {
        categorys,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // end method

  get_paintings = async (req, res) => {
    try {
      const paintings = await paintingModel.find({}).limit(12).sort({
        createdAt: -1,
      });
      const allPainting1 = await paintingModel.find({}).limit(9).sort({
        createdAt: -1,
      });
      const latest_painting = this.formatePainting(allPainting1);

      const allPainting2 = await paintingModel.find({}).limit(9).sort({
        rating: -1,
      });
      const topRated_painting = this.formatePainting(allPainting2);

      const allPainting3 = await paintingModel.find({}).limit(9).sort({
        discount: -1,
      });
      const discount_painting = this.formatePainting(allPainting3);

      responseReturn(res, 200, {
        paintings,
        latest_painting,
        topRated_painting,
        discount_painting,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  // end method

  price_range_painting = async (req, res) => {
    try {
      const priceRange = {
        low: 0,
        high: 0,
      };
      const paintings = await paintingModel.find({}).limit(9).sort({
        createdAt: -1, // 1 for asc -1 is for Desc
      });

      const latest_painting = this.formatePainting(paintings);
      const getForPrice = await paintingModel.find({}).sort({
        price: 1,
      });
      if (getForPrice.length > 0) {
        priceRange.high = getForPrice[getForPrice.length - 1].price;
        priceRange.low = getForPrice[0].price;
      }
      responseReturn(res, 200, {
        latest_painting,
        priceRange,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // end method

  query_paintings = async (req, res) => {
    console.log(req.query);

    const perPage = 12;
    req.query.perPage = perPage;

    try {
      const paintings = await paintingModel.find({}).sort({
        createdAt: -1,
      });

      const totalPainting = new queryPaintings(products, req.query)
        .categoryQuery()
        .ratingQuery()
        .priceQuery()
        .sortByPrice()
        .countPaintings();

      const result = new queryPaintings(paintings, req.query)
        .categoryQuery()
        .ratingQuery()
        .priceQuery()
        .sortByPrice()
        .skip()
        .limit()
        .getPaintings();

      responseReturn(res, 200, {
        paintings: result,
        totalPainting,
        perPage,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  // end method
}

module.exports = new homeControllers();
