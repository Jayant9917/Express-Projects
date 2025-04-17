const express = require("express");

const app = express();

const port = 3000;

// Midddleware for authentication 

const VALID_API_KEY = '100xdevs_cohort3_super_secret_valid_api_key';

function authenticateAPIKey(req, res, next) {
    const apiKey = req.header('100xdevs-api-key'); // Get API key from headers

    if (apiKey && apiKey === VALID_API_KEY) {
        return next(); // API key is valid, proceed to the next middleware/route handler
    } else {
        return res.status(401).json({ message: 'Invalid or missing API key' }); // API key is invalid or missing
    }
}

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

app.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
  });