const sellerController = require("../../controllers/dashboard/sellerController");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const router = require("express").Router();

router.get(
  "/request-seller-get",
  authMiddleware,
  sellerController.request_seller_get
);
module.exports = router;
