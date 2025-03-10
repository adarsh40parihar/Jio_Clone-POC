import React from 'react'

// Step 2: Importing useSelector and useDispatch from react-redux
import { useSelector, useDispatch } from 'react-redux';
import counterSlice from "../CounterSlice";
const actions = counterSlice.actions;


function ReduxCounter() {
  // Getting data from store and perticular slice.
  const count = useSelector((store) => store.counterState.count);
  // Step 3: Dispatching actions
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
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
        <button onClick={increment} >+</button>
        <p>Count : {count}</p>
        <button onClick={decrement} >-</button>
      </div>
    </>
  );
}

export default ReduxCounter