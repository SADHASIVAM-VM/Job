const express = require('express')
const app = express()
const jsData = require('../db.json')
const cors = require('cors') 
const Port = process.env.PORT || 3000

const allowedOrigins = ['http://localhost:5174',"https://splendorous-choux-bc8ab0.netlify.app"]; 
app.use(cors({
    origin:function (origin, callback){
        if(!origin || allowedOrigins.includes(origin)){
            callback(null, true);
        }else{
            callback(new Error("Not Allowed By Cors"))
        }
    }
}));
app.get('/Jobs',(req,res)=>{
    res.json(jsData)
})
app.listen(Port,()=>{
console.log('Server is Working',Port)
})