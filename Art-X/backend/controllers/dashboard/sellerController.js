const formidable = require("formidable");
const { responseReturn } = require("../../utiles/response");
const cloudinary = require("cloudinary").v2;
const sellerModel = require("../../models/sellerModel");

class sellerController {
  request_seller_get = async (req, res) => {
    // console.log(req.query);
    const { page, searchValue, perPage } = req.query;
    const skipPage = parseInt(perPage) * (parseInt(page) - 1);

    try {
      if (searchValue) {
      } else {
        const sellers = await sellerModel
          .find({ status: "pending" })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });
        const totalSeller = await sellerModel
          .find({ status: "pending" })
          .countDocuments();
        responseReturn(res, 200, { sellers, totalSeller });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  // end method
}

module.exports = new sellerController();
