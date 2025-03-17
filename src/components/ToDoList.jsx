import React, { useState } from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [open, setOpen] = useState(false);

  const addTask = () => {
    if (input.trim() === "") {
      alert("Задача не может быть пустой");
      return;
    }
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    if (window.confirm("Вы уверены, что хотите удалить эту задачу?")) {
      const newTasks = tasks.filter((task, i) => i !== index);
      setTasks(newTasks);
    }
  };

  const startEditing = (index) => {
    setIsEditing(index);
    setEditInput(tasks[index]);
    setOpen(true);
  };

  const saveEdit = () => {
    if (editInput.trim() === "") return;
    const updatedTasks = tasks.map((task, i) =>
      i === isEditing ? editInput : task
    );
    setTasks(updatedTasks);
    setIsEditing(null);
    setEditInput("");
    setOpen(false);
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setEditInput("");
    setOpen(false);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        To-Do List
      </Typography>
      <TextField
        label="Введите задачу"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        Добавить задачу
      </Button>

      <List sx={{ marginTop: 2 }}>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 1,
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              borderRadius: 1,
              padding: 2,
              border: "1px solid green",
            }}
          >
            <ListItemText primary={task} />
            <Box>
              <IconButton
                color="primary"
                onClick={() => startEditing(index)}
                sx={{ marginRight: 1 }}
              >
                <Edit />
              </IconButton>
              <IconButton color="error" onClick={() => deleteTask(index)}>
                <Delete />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>

      <Dialog open={open} onClose={cancelEdit}>
        <DialogTitle>Редактировать задачу</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Измените задачу"
            variant="outlined"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelEdit} color="primary">
            Отменить
          </Button>
          <Button onClick={saveEdit} color="primary">
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ToDoList;
