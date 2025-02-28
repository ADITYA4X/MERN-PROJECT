const paintingController = require("../../controllers/dashboard/paintingController");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const router = require("express").Router();

router.post("/painting-add", authMiddleware, paintingController.add_painting);
router.get("/paintings-get", authMiddleware, paintingController.paintings_get);
router.get(
  "/painting-get/:paintingId",
  authMiddleware,
  paintingController.painting_get
);
router.post(
  "/painting-update",
  authMiddleware,
  paintingController.painting_update
);
router.post(
  "/painting-image-update",
  authMiddleware,
  paintingController.painting_image_update
);

module.exports = router;
