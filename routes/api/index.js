const router = require("express").Router();
const sequenceRoutes = require("./sequence-api-routes");

router.use("/", sequenceRoutes);

module.exports = router;