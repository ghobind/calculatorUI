import "./App.css";
import React, { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [displayValue, setDisplayValue] = useState("0");

  function addToCalcValue(value) {
    if (displayValue === "0" && value !== ".") {
      setDisplayValue(value);
    } else if (displayValue.includes(".") && value === ".") {
      // do nothing
    } else {
      setDisplayValue(displayValue + value);
    }
  }
  function clearCalcValue() {
    setDisplayValue("0");
  }
  function evaluateDisplayValue() {
    try {
      const value = evaluate(displayValue);
      setDisplayValue(value);
    } catch (error) {
      console.error(error);
      setDisplayValue("SYNTAX ERROR");
    }
  }

  return (
    <div className="App">
      <div>
        <p>Calculator UI</p>
      </div>
      <div>
        <div className="border-all">{displayValue}</div>
      </div>
      <div>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("(");
          }}
        >
          (
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue(")");
          }}
        >
          )
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("^");
          }}
        >
          ^
        </button>
        <button
          className="calc-button"
          onClick={() => {
            clearCalcValue();
          }}
        >
          C
        </button>
      </div>
      <div>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("7");
          }}
        >
          7
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("8");
          }}
        >
          8
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("9");
          }}
        >
          9
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("/");
          }}
        >
          /
        </button>
      </div>
      <div>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("4");
          }}
        >
          4
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("5");
          }}
        >
          5
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("6");
          }}
        >
          6
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("*");
          }}
        >
          *
        </button>
      </div>
      <div>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("1");
          }}
        >
          1
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("2");
          }}
        >
          2
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("3");
          }}
        >
          3
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("-");
          }}
        >
          -
        </button>
      </div>
      <div>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("0");
          }}
        >
          0
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue(".");
          }}
        >
          .
        </button>
        <button
          className="calc-button"
          onClick={() => {
            evaluateDisplayValue();
          }}
        >
          =
        </button>
        <button
          className="calc-button"
          onClick={() => {
            addToCalcValue("+");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
