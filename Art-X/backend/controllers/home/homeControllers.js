const categoryModel = require("../../models/categoryModel");
const paintingModel = require("../../models/paintingModel");
const { responseReturn } = require("../../utiles/response");

class homeControllers {
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
      const latest_painting = this.formateProduct(allPainting1);

      const allPainting2 = await paintingModel.find({}).limit(9).sort({
        rating: -1,
      });
      const topRated_painting = this.formatePainting(allPainting2);

      const allPainting3 = await paintingModel.find({}).limit(9).sort({
        discount: -1,
      });
      const discount_painting = this.formateProduct(allPainting3);

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
}

module.exports = new homeControllers();
