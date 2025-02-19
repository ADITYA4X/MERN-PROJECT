const paintingController = require("../../controllers/dashboard/paintingController");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const router = require("express").Router();

router.post("/painting-add", authMiddleware, paintingController.add_painting);

module.exports = router;
