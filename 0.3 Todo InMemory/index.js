const express = require('express'); // Import the express module
const app = express(); // Create an express application
const port = 3000; // Define the port number

// Middleware to parse incoming JSON requests
app.use(express.json());

// This array will store our todos in memory (not saved in any file or database)
let todos = [];

// A counter to assign unique IDs to each todo
let currentId = 1;

// ======================= GET: Fetch all todos =======================
app.get('/todos', (req, res) => {
  res.json(todos); // Send the list of todos as JSON
});

// ======================= POST: Create a new todo =======================
app.post('/todos', (req, res) => {
  const { title } = req.body; // Get the 'title' from the request body

  // Check if title is missing
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  // Create a new todo object
  const newTodo = {
    id: currentId++, // Auto-increment the ID
    title: title,
    completed: false // By default, the task is not completed
  };

  // Add the new todo to the list
  todos.push(newTodo);

  // Send the created todo as a response with status 201 (Created)
  res.status(201).json(newTodo);
});

// ======================= PUT: Update a todo by ID =======================
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id); // Get the ID from the URL and convert it to number
  const { title, completed } = req.body; // Get title and completed status from request body

  // Find the todo with the matching ID
  const todo = todos.find(t => t.id === id);

  // If todo not found, return 404
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  // Update title if provided
  if (title !== undefined) {
    todo.title = title;
  }

  // Update completed status if provided
  if (completed !== undefined) {
    todo.completed = completed;
  }

  // Send the updated todo
  res.json(todo);
});

// ======================= DELETE: Remove a todo by ID =======================
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id); // Get the ID from the URL

  // Find the index of the todo with the given ID
  const index = todos.findIndex(t => t.id === id);

  // If not found, return 404
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  // Remove the todo from the array
  const deleted = todos.splice(index, 1);

  // Send the deleted todo as response
  res.json(deleted[0]);
});

// ======================= Start the server =======================
app.listen(port, () => {
  // Using + for string concatenation
  console.log('Server running on http://localhost:' + port);
});
