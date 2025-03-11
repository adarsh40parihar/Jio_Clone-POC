import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
    const [delta, setDelta] = useState(1);
    const [value, setValue] = useState("");
  const increment = () => {
    setCount(count + delta);
  };
  const decrement = () => {
    setCount(count - delta);
  };
  const updateDeltaHandler = () =>{
    setDelta(Number(value));
    console.log(`Delta seted of ${value}`)
    setValue("");
  }
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column", // Stack elements vertically
          borderRadius: "10px",
        }}
      >
        <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
          <input
            type="number"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <button onClick={updateDeltaHandler}>∆</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={increment}>+ {delta}</button>
            <p>Count: {count}</p>
            <button onClick={decrement}>- {delta}</button>
            <button
              onClick={() => {
                setCount(0);
                setDelta(1);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
