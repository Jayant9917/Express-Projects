const express = require("express");

function addtwonumber(a,b){
    return a + b;
}
const app = express();

// Query Parameter passing
app.get("/", (req, res) => {

    // Convert the String into number by ParseInt
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = addtwonumber(a,b);
    res.send(sum);
})

app.listen(3001, () => {
    console.log("server is running on 3001 Port")
});