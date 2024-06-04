const db = require('../Data/db.json')

exports.getJobs =(req, res)=>{
    res.json({
        sucess:true,
        db
    })
}
