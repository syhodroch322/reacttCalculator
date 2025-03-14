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

    if (operation === "+") {
      newResult = String(num1 + num2);
    } else if (operation === "-") {
      newResult = String(num1 - num2);
    } else if (operation === "*") {
      newResult = String(num1 * num2);
    } else if (operation === "/") {
      if (num2 === 0) {
        newResult = "Error";
      } else {
        newResult = String(num1 / num2);
      }
    }
    setResult(newResult);
    setFirstNumber("");
    setOperation("");
  };

  return (
    <div className="calculator">
      <p className="display">{result}</p>
      <div className="buttons">
        <button className="clear" onClick={() => handleClear()}>
          C
        </button>
        <button className="number" onClick={() => handleNumber("7")}>
          7
        </button>
        <button className="number" onClick={() => handleNumber("8")}>
          8
        </button>
        <button className="number" onClick={() => handleNumber("9")}>
          9
        </button>
        <button className="operation" onClick={() => handleOperation("/")}>
          /
        </button>
        <button className="number" onClick={() => handleNumber("4")}>
          4
        </button>
        <button className="number" onClick={() => handleNumber("5")}>
          5
        </button>
        <button className="number" onClick={() => handleNumber("6")}>
          6
        </button>
        <button className="operation" onClick={() => handleOperation("*")}>
          *
        </button>
        <button className="number" onClick={() => handleNumber("1")}>
          1
        </button>
        <button className="number" onClick={() => handleNumber("2")}>
          2
        </button>
        <button className="number" onClick={() => handleNumber("3")}>
          3
        </button>
        <button className="operation" onClick={() => handleOperation("-")}>
          -
        </button>
        <button className="number" onClick={() => handleNumber("0")}>
          0
        </button>
        <button className="number" onClick={() => handleNumber(".")}>
          .
        </button>
        <button className="operation" onClick={() => handleOperation("+")}>
          +
        </button>
        <button className="equal" onClick={() => handleEqual()}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
