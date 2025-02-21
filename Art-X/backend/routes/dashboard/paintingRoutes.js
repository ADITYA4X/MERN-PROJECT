const paintingController = require("../../controllers/dashboard/paintingController");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const router = require("express").Router();

router.post("/painting-add", authMiddleware, paintingController.add_painting);
router.get("/paintings-get", authMiddleware, paintingController.paintings_get);

module.exports = router;
