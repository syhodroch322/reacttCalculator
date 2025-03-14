import React, { useState } from "react";
import "./Calculator.scss";

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");

  const handleNumber = (num) => {
    setResult((prev) => {
      if (num === "." && prev.includes(".")) {
        return prev;
      }
      return prev === "0" ? num : prev + num;
    });
  };

  const handleClear = () => {
    setResult("0");
    setOperation("");
    setFirstNumber("");
  };

  const handleOperation = (op) => {
    setFirstNumber(result);
    setOperation(op);
    setResult("0");
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(result);
    let newResult = "0";

    switch (operation) {
      case "+":
        newResult = String(num1 + num2);
        break;
      case "-":
        newResult = String(num1 - num2);
        break;
      case "*":
        newResult = String(num1 * num2);
        break;
      case "/":
        newResult = num2 === 0 ? "Error" : String(num1 / num2);
        break;
      default:
        return;
    }
    setResult(newResult);
    setFirstNumber("");
    setOperation("");
  };

  const buttons = [
    { label: "C", type: "clear", action: handleClear },
    ...["7", "8", "9", "/"],
    ...["4", "5", "6", "*"],
    ...["1", "2", "3", "-"],
    ...["0", ".", "+", "="],
  ];

  return (
    <div className="calculator">
      <p className="display">{result}</p>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={btn.type || (isNaN(btn.label) ? "operation" : "number")}
            onClick={() => {
              if (btn.label === "=") handleEqual();
              else if (btn.label === "C") handleClear();
              else if (isNaN(btn.label) && btn.label !== ".")
                handleOperation(btn.label);
              else handleNumber(btn.label);
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
