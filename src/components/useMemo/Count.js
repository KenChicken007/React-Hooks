import React, { useState, useMemo } from "react";

export default function Count() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState(0);

  const Sum_num = React.memo(({ n }) => {
    var total = 0;
    console.log(n);
    for (let i = 0; i < n; i++) {
      total += i;
    }
    return <div>Total: {total}</div>;
  });

  //   const sum = useMemo(() => sum_num(number), [number]);

  console.log("Completely re-rendered");

  return (
    <>
      <input
        type="text"
        placeholder="Enter text"
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <Sum_num n={number} />
    </>
  );
}
