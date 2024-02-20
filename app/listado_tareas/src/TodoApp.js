import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, IconButton, TextField, Typography, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        To-Do List
      </Typography>
      <TextField
        label="Add Task"
        variant="outlined"
        value={task}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleAddTask}>Add</Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} dense button>
            <FormControlLabel
              control={<Checkbox checked={task.completed} onChange={() => handleToggleTask(index)} />}
              label={task.text}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoApp;
