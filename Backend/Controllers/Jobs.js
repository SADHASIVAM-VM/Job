const db = require('../Data/db.json')

exports.getJobs =(req, res)=>{
    console.log(req.body, "dat")
    res.json({
        sucess:true,
        db
    })
}