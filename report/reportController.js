
const ReportModel = require("./reportModel")
const SingleModel = require("./singleModel")
const catchAsync = require("../error/catchAsync")
exports.getReport = catchAsync(async (req, res) =>
{
    
    const TM_USER_NAME = "S10036";
    let obj1 = {}
    obj1.Yes = 0;
    obj1.Null = 0;
    obj1.No = 0;
    const data = await ReportModel.aggregate([
        { $match: { TM_USER_NAME } },
        { $group: { _id: "$q1", total: { $sum: 1 } } },
       
        
    ])
    const dataq3 = await ReportModel.aggregate([
        { $match: { TM_USER_NAME} },
        { $group: { _id: "$q4", total: { $sum: 1 } } },
       
        
    ])

    data.map(value =>
    {
        console.log(value.total)
        value._id ? obj1[value._id] =value.total : obj1.Null = value.total
    })
    
    let obj2 ={}
    dataq3.map(({_id, total}) =>
    {
        _id ? obj2[_id]= total : obj2.Null = total
       
    })
    console.log("obj : ", obj1)
    console.log("obj2 : ", obj2['2 days'])
    const createNewModel = await SingleModel.create({
        TM_USER_NAME ,
        q1Yes: obj1.Yes,
        q1No: obj1.No,
        q1Null: obj1.Null,
        q42days: obj2['2 days'],
    q47days: obj2['7 days'],
    q41month: obj2['1 month'],
    q4null: obj2['Null'],
    q43days: obj2['3 days'],
    q45days: obj2['5 days'],
    q4morethen1year : obj2['More then 1 year']
        
    })
  
    res.status(201).json({
      createNewModel
    })
})