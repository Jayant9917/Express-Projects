const express = require("express");

const app = express();

let requestcount = 0;

app.use((req, res, next) => {
    requestcount++;
    next();
})

app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a + b;
    res.json({
        "ans" : sum
    })
})

app.get("/count", (req, res) => {
    res.status(200).json({requestcount})
});

app.listen(3001);