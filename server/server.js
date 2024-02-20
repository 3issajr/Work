const mongoose = require('mongoose');
const express = require('express');

// Handle connection with react
const cors = require('cors');

// Providing details while running server on CLI
const morgan = require('morgan')

// App Routes
const route = require('./routes/lugxRoutes')

// Staring app
const port = process.env.PORT || 3000;
const app = express();

mongoose.connect('mongodb+srv://eissa:test123@cluster0.wqvn0jh.mongodb.net/lugx',{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{app.listen(port,()=>{console.log("Listening on port 3000")}),console.log("Database Connected")})
.catch((err)=>{console.error("Database Connection failed",err)})


app.use(
    cors({
        origin : "http://localhost:3001"
    })
)

// El miidleware between request and response
// Three Important middlewares -- el json related to req.body -- el urlencoded related to params
app.use(express.json()) // Parse incoming request to JSON payload which has header of [content-type:"application/json"]
app.use(express.static('public')) // Serve static files such as HTML,CSS,JS,Images and other assets from directory(public)
app.use(express.urlencoded({extended:true})) // Parse incoming requests with URL-encoded payloads, Accepts only UTF-8 encoding
app.use(morgan('dev'))  

// The next part is very important ,, next is a static method and a parameter in the callback function and it make the function to jump to next function 
app.use((req,res,next)=>{
  res.locals.path = req.path;
  next();
})

app.use(route)




