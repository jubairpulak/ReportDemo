const mongoose = require("mongoose")

const SingleModel = new mongoose.Schema({
    TM_USER_NAME : String,
    q1Yes: Number,
    q1No: Number,
    q1Null: Number,
    q42days: Number,
    q47days: Number,
    q41month: Number,
    q4null: Number,
    q43days: Number,
    q45days: Number,
    q4morethen1year : Number
})


module.exports = mongoose.model("singleReportModel", SingleModel)