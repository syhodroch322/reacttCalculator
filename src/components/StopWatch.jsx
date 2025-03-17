import React, { useRef, useState } from "react";
import { Button, Box, Typography } from "@mui/material";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState("Таймер остановлен");
  const intervalId = useRef(null);

  const startTimer = () => {
    if (intervalId.current) return;

    intervalId.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
      setStatus("Таймер запущен");
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setStatus("Таймер остановлен");
  };

  const resetTimer = () => {
    setTime(0);
    clearInterval(intervalId.current);
    intervalId.current = null;
    setStatus("Таймер остановлен");
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
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
    </Box>
  );
};

export default Stopwatch;
