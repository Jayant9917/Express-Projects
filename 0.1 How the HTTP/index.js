const express = require("express");

const app = express();

app.get("/", function(req, res){
    // Sending the html or contxt on the webpage fromm the server
    // res.send("hello world");

    // Sending the json data
    res.json({
        data: " ",
        name: "",
        id:""
    })
})



app.listen(3000);