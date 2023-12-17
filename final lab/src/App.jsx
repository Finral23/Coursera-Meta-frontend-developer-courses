import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const performOperation = (operator) => (e) => {
    e.preventDefault();
    setResult((prevResult) => {
      const inputValue = Number(inputRef.current.value);
      switch (operator) {
        case "add":
          return prevResult + inputValue;
        case "subtract":
          return prevResult - inputValue;
        case "multiply":
          return prevResult * inputValue;
        case "divide":
          return prevResult / inputValue;
        default:
          return prevResult;
      }
    });
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={performOperation("add")}>add</button>
        <button onClick={performOperation("subtract")}>subtract</button>
        <button onClick={performOperation("multiply")}>multiply</button>
        <button onClick={performOperation("divide")}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
