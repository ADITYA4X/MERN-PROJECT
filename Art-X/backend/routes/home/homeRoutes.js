const homeControllers = require("../../controllers/home/homeControllers");
const router = require("express").Router();

router.get("/get-categorys", homeControllers.get_categorys);

router.get("/get-paintings", homeControllers.get_paintings);

router.get(
  "/price-range-latest-painting",
  homeControllers.price_range_painting
);

module.exports = router;
