import React, { useState, useRef, forwardRef, useEffect } from "react";

export default function Ref() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const prevName = useRef("");

  //Incrementing by 1 everytime you type
  //   const renderCount = useRef(1);
  //   useEffect(() => {
  //     renderCount.current += 1;
  //   });

  function focus() {
    inputRef.current.focus();
  }

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        My name is {name} and It used to {prevName.current}
      </div>
      <button onClick={focus}>Focus</button>
    </>
  );
}
