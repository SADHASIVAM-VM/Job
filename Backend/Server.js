const express = require('express');
const cors = require('cors')
const JobsRoute = require('./Routes/JobsRoute');
const app = express()
const env = require("dotenv")
const path = require('path')
env.config({path:path.join(__dirname,"config",'.env')}) 
 
const allowedOrigins = process.env.URS ;
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(JobsRoute)

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`port working successfully @`,port)
})