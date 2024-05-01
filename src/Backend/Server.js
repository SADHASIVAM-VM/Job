const express = require('express');
const cors = require('cors');
const JsData =require('../db.json')

const app = express();

const allowedOrigins = ['https://splendorous-choux-bc8ab0.netlify.app/','splendorous-choux-bc8ab0.netlify.app/:1'];
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://splendorous-choux-bc8ab0.netlify.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/Jobs', (req, res) => {
   res.send(JsData)
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
