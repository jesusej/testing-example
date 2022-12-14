import { useState } from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount((prev) => prev + 1);
  }

  const decrement = () => {
    setCount((prev) => prev - 1);
  }

  const restart = () => {
    setCount(initialCount);
  }

  const switchSigns = () => {
    setCount((prev) => prev *-1);
  }
  
  return (
    <div>
      <h1>
        Count: <h3>{count}</h3>
      </h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Switch Signs</button>
      </div>
    </div>
  )
}
export default Counter