const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, resp)=> {
    respend("Hi, welcome to my Heroku app");
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    
    console.log("port is running");
})