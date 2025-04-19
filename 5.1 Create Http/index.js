const express = require("express");
const app = express();

const port = 3000;

// /sum/:a/:b if the user is sending th edynamic routes
// www.google.com/add/:a/:b

app.get("/sum", (req, res) => {
    const a = parentInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.json({ 
        ans : sum 
    });
});

app.get("/multiply", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const multiply = a*b;
    res.json({
        ans : multiply
    });
})

app.get("/sub", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sub = a - b;
    res.json({
        ans : sub
    });
})

app.get("/div", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const div = a / b;
    res.json({
        ans : div
    });
})

app.listen(port , () => {
    console.log("server is running on " + port )
});
