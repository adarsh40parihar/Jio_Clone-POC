import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
          setCount(count - 1);
        };
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
        }}
      >
        <button onClick={increment}>+</button>
        <p>Count : {count}</p>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}

export default Counter;

