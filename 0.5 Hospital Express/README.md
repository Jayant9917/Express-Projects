# Hospital Express API

A simple Express.js API that manages kidney health data for users. This project demonstrates basic CRUD operations using Express.js.

## Features

- Track kidney health status for users
- Add new kidneys with health status
- Update kidney health status
- Remove unhealthy kidneys
- View kidney statistics

## API Endpoints

### GET /
Returns statistics about the user's kidneys:
- Total number of kidneys
- Number of healthy kidneys
- Number of unhealthy kidneys

### POST /
Adds a new kidney with specified health status.
- Request body: `{ "isHealthy": boolean }`

### PUT /
Updates all kidneys to healthy status.

### DELETE /
Removes all unhealthy kidneys. Returns 411 status code if there are no unhealthy kidneys to remove.

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running the Server

Start the server with:
```bash
node index.js
```

The server will run on port 3000.

## Example Usage

### Adding a new kidney
```bash
curl -X POST -H "Content-Type: application/json" -d '{"isHealthy": true}' http://localhost:3000/
```

### Getting kidney statistics
```bash
curl http://localhost:3000/
```

### Making all kidneys healthy
```bash
curl -X PUT http://localhost:3000/
```

### Removing unhealthy kidneys
```bash
curl -X DELETE http://localhost:3000/
```

## Technologies Used

- Node.js
- Express.js
- JavaScript

