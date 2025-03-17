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

  const handleSubmit = async () => {
    await sendDataTelegramBot({ email, phoneNum });
    setEmail("");
    setPhoneNum("");
    handleClose();
  };
  const sendDataTelegramBot = async (data) => {
    const botToken = "7679377976:AAEJJWNTrUJSWrZlcav52Hux3RisQSyUIxQ";
    const chatId = "416626861";
    const message = `Email: ${data.email} Phone: ${data.phoneNum}`;

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
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Закрыть
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Отправить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWindow;
