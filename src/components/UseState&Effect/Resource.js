import React, { useState, useEffect } from "react";

export default function Resource() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  //useEffect runs when a render occurs depending on the parameter
  //Here everytime resourceType changes
  // useEffect(() => {}, [resourceType]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("Comments")}>Comments</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
