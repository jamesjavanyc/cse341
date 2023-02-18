const router = require("express").Router();
const getNameForFirstWeek = require("../controllers/name-controller")

const nameRoute = router.get("/", getNameForFirstWeek)

module.exports = nameRoute