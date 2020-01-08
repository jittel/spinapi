var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("hummuna hummuna hummuna you got spinach?");
})

app.get("/spinach",(req,res)=>{
    res.json({
        name:"spinach",
        powerful:true
    })
})

app.listen(PORT, function(){
    console.log("listening on port " + PORT);
})