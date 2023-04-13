import React, { useState, useEffect } from "react";

export default function Windows() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setwindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>{windowWidth}</div>
    </>
  );
}
