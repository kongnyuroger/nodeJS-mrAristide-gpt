const express = require('express');
const app = express();
const   PORT = 3000;

app.use(express.json());

// Dummy in-memory data (acts like a database)
let tasks = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Read a book', completed: true },
];

//get ALL task
app.get('/tasks', (req,res) => {
    res.json(tasks)
});

// get one task
app.get('/tasks/:id', (req,res) => {
    const taskToGet = tasks.find(task => task.id === parseInt(req.params.id)) ;
    if (!taskToGet) return res.status(404).json({ message: 'Task not found' });
    res.json(taskToGet)
});

//create task
app.post('/tasks',(req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    }
    tasks.push(newTask)
    res.status(201).json(newTask)
})

//update task
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });

  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;
  res.json(task);
});

//delete task
app.delete('/task/:id',(req, res) => {
  const task = task.fine();
})