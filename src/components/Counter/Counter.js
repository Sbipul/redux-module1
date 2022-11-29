import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    } else {
      return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="section text-center">
      <div>
        <h1>{state}</h1>
        <div>
          <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
