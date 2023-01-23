const express = require("express");
const hbs = require("hbs");   // hbs is a express. js wrapper for the handlebars. js javascript template engine.
const path = require("path");

const PORT= 8080;
const app= express();

// use of views 
app.set("view engine","hbs");
 
 //use of static page
const static_path = path.join(__dirname+"/public"); //declaring static path
app.use(express.static(static_path)); 

app.get("/",(req,res)=>{
      res.render("index");   
})

app.get("/projects/ageCalculator",(req,res)=>{
    res.render("ageCalc");   
})

app.get("/projects/bmiCalculator",(req,res)=>{
    res.render("bmiCalc");   
})

app.get("/projects/tempConvertor",(req,res)=>{
    res.render("tempConv");   
})

app.get('*',(req,res)=>{
    res.render("404error");
    // res.send(`<h1>404 Error, Page Not Found</h1>`)
})

app.listen(PORT,()=>{
    console.log(`Server started: http://localhost:${PORT}`);
})

