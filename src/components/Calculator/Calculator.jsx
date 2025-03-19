import React, { useState } from "react";
import { Grid2 } from "@mui/material";
import { Boxcalc, StyledButton, StyledTextField } from "./styled";

const Calculator = () => {
  const [num, setNum] = useState("");

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  function handleClick(value) {
    if (value === "C") {
      setNum("");
    } else if (value === "=") {
      try {
        setNum(eval(num));
      } catch {
        setNum("Error");
      }
    } else {
      setNum((prev) => prev + value);
    }
  }

  return (
    <Boxcalc>
      <StyledTextField fullWidth variant="outlined" value={num} readOnly />

      <Grid2 container spacing={1}>
        {buttons.map((btn, index) => (
          <Grid2 key={index}>
            <StyledButton
              variant="contained"
              color={
                btn === "=" ? "success" : btn === "C" ? "error" : "primary"
              }
              fullWidth
              onClick={() => handleClick(btn)}
            >
              {btn}
            </StyledButton>
          </Grid2>
        ))}
      </Grid2>
    </Boxcalc>
  );
};

export default Calculator;
