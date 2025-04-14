const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// File path for storing todos
const todosFilePath = path.join(__dirname, 'todos.json');

// Helper function to read todos from file
function readTodos() {
  if (!fs.existsSync(todosFilePath)) {
    return [];
  }
  const data = fs.readFileSync(todosFilePath, 'utf-8');
  return JSON.parse(data || '[]');
}

// Helper function to write todos to file
function writeTodos(todos) {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
}

// ===================== GET all todos =====================
app.get('/todos', (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

// ===================== POST a new todo =====================
app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const todos = readTodos();
  const newTodo = {
    id: Date.now(), // Unique ID based on timestamp
    title: title,
    completed: false
  };

  todos.push(newTodo);
  writeTodos(todos);

  res.status(201).json(newTodo);
});

// ===================== PUT: Update a todo =====================
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todos = readTodos();
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  writeTodos(todos);
  res.json(todo);
});

// ===================== DELETE a todo =====================
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const todos = readTodos();
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const deleted = todos.splice(index, 1);
  writeTodos(todos);

  res.json(deleted[0]);
});

// ===================== Start server =====================
app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});
