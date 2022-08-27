import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [incValue, setIncValue] = useState(1);
  const [decValue, setDecValue] = useState(1);


  const DECR = () => {
    return setCounter(counter - 1);
  };
  const INCR = () => {
    return setCounter(counter + 1);
  };
  const REST = () => {
    return setCounter(0);
  };

  // increment and decrement by value
  const DecrByValue = () => {
    return setCounter(counter - Number(decValue));
  };
  const IncrByValue = () => {
    return setCounter(counter + Number(incValue));
  };

  // const dynamicCounter = setInterval(() => {
  //   setCounter(counter+1)
  // }, 1000);
  return (
    <div className="App">
      <div className="counter-box">
        <h1>counter</h1>
        <p> {counter <= 0 ? 0 : counter}</p>
        <div className="btn-container">
          <span>
            <button onClick={IncrByValue}>incr by value</button>
            <input
              type="number"
              min={1}
              value={incValue}
              onChange={(e) => setIncValue(e.target.value)}
            />
          </span>
          {/*######################################################################################################*/}
          <div className="button-box">
            <button onClick={INCR}>Increment</button>
            <button onClick={REST}>Rest</button>
            <button disabled={counter === 0 ? true : false} onClick={DECR}>
              decrement
            </button>
          </div>
          {/*######################################################################################################*/}

          <span>
            <button onClick={DecrByValue}>incr by value</button>
            <input
              type="number"
              min={1}
              value={decValue}
              onChange={(e) => setDecValue(e.target.value)}
            />
          </span>
          {/*######################################################################################################*/}
        </div>
      </div>
    </div>
  );
}

export default App;
