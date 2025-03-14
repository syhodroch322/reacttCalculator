import React, { useState } from "react";
import "./Calculator.scss";

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b === 0 ? "Error" : a / b),
};

const Calculator = () => {
  const [state, setState] = useState({
    result: "0",
    firstNumber: "",
    operation: "",
  });

  const handleNumber = (num) => {
    setState(({ result, ...rest }) => ({
      ...rest,
      result: result === "0" ? num : result + num,
    }));
  };

  const handleClear = () =>
    setState({ result: "0", firstNumber: "", operation: "" });

  const handleOperation = (op) => {
    setState(({ result }) => ({
      firstNumber: result,
      operation: op,
      result: "0",
    }));
  };

  const handleEqual = () => {
    setState(({ firstNumber, result, operation }) => {
      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(result);
      return {
        result: operations[operation]?.(num1, num2)?.toString() || "0",
        firstNumber: "",
        operation: "",
      };
    });
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
      <p className="display">{state.result}</p>
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
