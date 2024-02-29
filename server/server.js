const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const route = require('./Routes/MyDayRoutes')

const port = process.env.PORT || 3000;
const app = express();

mongoose.connect('mongodb+srv://eissa:test123@cluster0.wqvn0jh.mongodb.net/MyDay',{useNewUrlParser:true , useUnifiedTopology:true})
// useNewUrlParser Tell Mongoose to useNewUrlParser to handle wide range of URL formats
// useUnifitedTopology tell Mongoose to use new servery discovery and monitoring engine in MongoDB Driver

.then((result)=>{app.listen(port,()=>{console.log("Listening on port 3000")}),console.log("Database Connected")})
.catch((err)=>{console.error("Database connection failed",err)})


app.use(cookieParser())

app.use(
    cors({
    origin:"http://localhost:3001",
    credentials:true
    })
)

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    // // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
});

app.use(express.json()) // Parse incoming request to JSON payload which has header of [content-type:"application/json"]

app.use(express.static('public')) // Serve static files such as HTML,CSS,JS,Images and other assets from directory(public)

app.use(express.urlencoded({extended:true})) // Parse incoming requests with URL-encoded payloads, Accepts only UTF-8 encoding

app.use(morgan('dev'))

app.use((req,res,next)=>{
    res.locals.path = req.path;
    next();
  })
  

app.use(route)
