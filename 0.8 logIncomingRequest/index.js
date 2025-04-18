const express = require('express');
const app = express();

// Middleware function to log incoming requests
function logRequests(req, res, next) {
    const log = req.method + " " + req.url + " - " + new Date().toISOString();
    console.log(log);
    next(); // Pass to the next middleware or route handler
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


