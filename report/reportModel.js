const mongoose = require('mongoose');

const ReportModel =  new mongoose.Schema({

    id: Number,
    data_status: String,
    TM_USER_NAME: String,
    TM_NAME: String,
    TERITORY_NAME: String,
    OUTLET_NAME: String,
    r_name: String,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    q8: String,
    q9 : String

    }, {timestamps : true})

    
    
    
    
    

module.exports = mongoose.model("report", ReportModel)