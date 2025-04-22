const express = require("express");

const app = express();
const port = 3000;

let requestCount = 0;

// Middleware to count total number of requests
function requestCountMiddleware(req, res, next) {
    requestCount++;
    console.log(`Request made to ${req.url} | Total: ${requestCount}`);
    next();
}

app.use(requestCountMiddleware);

// Root route
app.get("/", (req, res) => {
    res.send("Hello Jay");
});

// Endpoint to expose the total request count
app.get("/responseEndpoint", (req, res) => {
    res.send(`Total requests made to server: ${requestCount}`);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
