const express = require("express");
const router = express.Router();

const getAlldata = require("../controllers/controllers");

router.route("/").get(getAlldata); // getAlldata is function (only call the function);

module.exports = router;
