import React, { useRef, useState } from "react";
import {
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("Таймер остановлен");
  const [history, setHistory] = useState([]);
  const intervalId = useRef(null);

  const startTimer = () => {
    if (intervalId.current) return;

    intervalId.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
      setStatus("Таймер запущен");
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setStatus("Таймер остановлен");
    setHistory((prevHistory) => [...prevHistory, formatTime(time)]);
  };

  const resetTimer = () => {
    setTime(0);
    setHistory([]);
    clearInterval(intervalId.current);
    intervalId.current = null;
    setStatus("Таймер остановлен");
  };

  const formatTime = (timeInMs) => {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);
    const milliseconds = Math.floor((timeInMs % 1000) / 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }:${milliseconds < 10 ? `0${milliseconds}` : milliseconds}`;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Секундомер
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Время: {formatTime(time)} сек
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4, fontStyle: "italic" }}>
        {status}
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" color="success" onClick={startTimer}>
          Старт
        </Button>
        <Button variant="contained" color="error" onClick={stopTimer}>
          Стоп
        </Button>
        <Button variant="contained" color="primary" onClick={resetTimer}>
          Сбросить
        </Button>
      </Box>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">История промежутков:</Typography>
        <List>
          {history.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={`Промежуток: ${item}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Stopwatch;
