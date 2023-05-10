import { useState } from "react";
import { useCount } from "./useCount";

export const Counter = () => {
  const { num, increase, decrease, reset } = useCount(0);

  return (
    <>
      <button onClick={decrease}>-</button>
      <h1>{num}</h1>
      <button onClick={increase}>+</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};
