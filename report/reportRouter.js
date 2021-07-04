

const express = require("express")

const router = express.Router()

const {getReport} = require("./reportController")

router.route("/get").get(getReport)

module.exports = router