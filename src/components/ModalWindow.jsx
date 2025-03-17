import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

const ModalWindow = ({ open, handleClose }) => {
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!email || !phoneNum || !comment) {
      setError("Пожалуйста, заполните все поля");
      return;
    }
    setError("");

    await sendDataTelegramBot({ email, phoneNum, comment });
    setEmail("");
    setPhoneNum("");
    setComment("");
    handleClose();
  };
  const sendDataTelegramBot = async (data) => {
    const botToken = "7679377976:AAEJJWNTrUJSWrZlcav52Hux3RisQSyUIxQ";
    const chatId = "416626861";
    const message = `Email: ${data.email} Phone: ${data.phoneNum} Comment: ${data.comment}`;

    try {
      await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
          message
        )}`
      );
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Bot</DialogTitle>
      <DialogContent>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          error={!email && error}
          helperText={!email && error ? "Поле не может быть пустым" : ""}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          fullWidth
          margin="normal"
          error={!phoneNum && error}
          helperText={!phoneNum && error ? "Поле не может быть пустым" : ""}
        />
        <TextField
          label="Comment"
          type="text"
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          error={!comment && error}
          helperText={!comment && error ? "Поле не может быть пустым" : ""}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Закрыть
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          disabled={!email || !phoneNum || !comment}
        >
          Отправить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWindow;
