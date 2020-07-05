import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const changeBackground = () => {
    document.querySelector(".container").style.background = `rgb(${Math.floor(
      Math.random() * 100
    )},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`;
  };

  return (
    <div
      className="container"
      onClick={() => {
        setCounter(counter + 1);
        changeBackground();
      }}
    >
      <div className="counter">{counter}</div>
    </div>
  );
}

export default App;
