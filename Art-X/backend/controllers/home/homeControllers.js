const categoryModel = require("../../models/categoryModel");
const paintingModel = require("../../models/paintingModel");
const { responseReturn } = require("../../utiles/response");

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
}

module.exports = new homeControllers();
