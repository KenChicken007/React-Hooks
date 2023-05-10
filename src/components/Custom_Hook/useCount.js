import { useState } from "react";

export const useCount = (initialVal) => {
  const [num, setNum] = useState(initialVal);

  const increase = () => {
    setNum((prev) => prev + 1);
  };

  const decrease = () => {
    setNum((prev) => prev - 1);
  };

  const reset = () => {
    setNum(initialVal);
  };

  return { increase, decrease, reset, num };
};
