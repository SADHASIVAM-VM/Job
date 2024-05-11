const express = require('express');
const cors = require('cors');
const JsData = require('../db.json');

const app = express();
const port = "https://splendorous-choux-bc8ab0.netlify.app" || 5000;
const allowedOrigins = ["http://localhost:5173","https://splendorous-choux-bc8ab0.netlify.app"];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS: ' + origin));
    }
  }
}));

app.get('/Jobs', (req, res) => {
   res.send(JsData);
});

// Error handling middleware for CORS errors
app.use(function (err, req, res, next) {
  if (err.name === 'Error' && err.message === 'Not allowed by CORS') {
    res.status(403).json({ error: 'CORS request not allowed' });
  } else {
    next(err); // Pass other errors to default Express error handler
  }
});

// Start the server

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
