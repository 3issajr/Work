const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')
const route = require('./routes/BistroRoutes')


const port = process.env.PORT || 3000;
const app = express()

mongoose.connect('mongodb+srv://eissa:test123@cluster0.wqvn0jh.mongodb.net/Bistro',{useUnifiedTopology:true , useNewUrlParser:true})
.then((result)=>app.listen(port,()=>{console.log("Listening on port 3000")}),console.log("Database connected"))
.catch((err)=>{console.error("Database connection failed"),err})

app.use(cookieParser())

app.use(
    cors({
        origin : "http://localhost:3001",
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

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(morgan('dev'))

app.use((req,res,next)=>{
    res.locals.path = req.path;
    next();
  })
  
app.use(route)