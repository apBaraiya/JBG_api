const locationModel = require("../models/locationModel");
const getAlldata = async (req, res) => {
    const myData = await locationModel.find(req.query);
    res.status(200).json({ myData });
};
module.exports = getAlldata;