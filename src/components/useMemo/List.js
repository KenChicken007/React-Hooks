import React, { useState, useMemo, useEffect } from "react";

const users = [
  { id: "a", name: "Robin" },
  { id: "b", name: "Dennis" },
];

export default function Name_List() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  const List = ({ list }) => {
    return (
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
  };

  const ListItem = ({ item }) => {
    return <li>{item.name}</li>;
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleSearch}>Search</button>
      <List list={filteredUsers} />
    </div>
  );
}
