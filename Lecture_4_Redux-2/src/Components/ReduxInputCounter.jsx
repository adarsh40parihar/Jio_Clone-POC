import React, { useState } from "react";

// for getting data from store
import { useSelector } from "react-redux";

// for dispatching actions
import { useDispatch } from "react-redux";
import CounterInputSlice from "../Redux/slice/CounterInputSlice";
const actions = CounterInputSlice.actions;

function ReduxInputCounter() {
 
  const [value, setValue] = useState("");
  const {count, delta} = useSelector((store) => store.counterInputSliceSection);

  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
    console.log("increment");
  };
  const decrement = () => {
    dispatch(actions.decrement());
    console.log("decrement");
  };
  const updateDeltaHandler = () => {
    if (value === "") return;
    dispatch(actions.updateDelta(Number(value)));
    setValue("");
  };
  const resetHandler = () => {
    dispatch(actions.reset());
    console.log("reset");
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
          flexDirection: "column", // Stack elements vertically
          borderRadius: "10px",
        }}
      >
        <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Set a Delta"
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
            <button onClick={resetHandler}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReduxInputCounter;
