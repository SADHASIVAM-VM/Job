const express = require('express');
const cors = require('cors');
const JsData =require('../db.json')

const app = express();

const allowedOrigins = ['https://splendorous-choux-bc8ab0.netlify.app','https://splendorous-choux-bc8ab0.netlify.app/','splendorous-choux-bc8ab0.netlify.app/:1'];
app.use(cors({
  origin: function (origin, callback) {
    // Check if the origin is allowed or is undefined (for server-to-server requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));


app.get('/Jobs', (req, res) => {
   res.send(JsData)
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
