const express = require('express')
const app = express()
const jsData = require('../db.json')
const Port = process.env.PORT || 3000

app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:5174']; 
    const origin = req.headers.origin;
    if (allowedOrigins === origin) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.get('/Jobs',(req,res)=>{
    res.json(jsData)
})
app.listen(Port,()=>{
console.log('Server is Working',Port)
})