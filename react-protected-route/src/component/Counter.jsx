import { useEffect } from "react";
import { useState } from "react";

import { SimpleButton } from "./ButtonCmp";

function Counter() {
  const init = localStorage.getItem("counterValue") || 0;
  const [counter, setCounter] = useState(parseInt(init));

  useEffect(() => {
    localStorage.setItem("counterValue", counter);
  }, [counter]);

  function incCounter() {
    setCounter(counter + 1);
    // this will store previous state value
    // localStorage.setItem("counterValue", counter);
  }

  function decCounter() {
    setCounter(counter - 1);
  }

  return (
    <div className="counter">
      <div className="counter-value">
        <h1>{counter}</h1>
      </div>
      <div className="counter-btn">
        <SimpleButton btnName="Inc." handleClick={incCounter} />
        <SimpleButton btnName="Dec." handleClick={decCounter} />
      </div>
    </div>
  );
}
export default Counter;
