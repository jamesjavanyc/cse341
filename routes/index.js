const router = require('express').Router();

router.use('/contacts', require('./contacts'))

router.use("/", require("./name-route"))

module.exports = router;