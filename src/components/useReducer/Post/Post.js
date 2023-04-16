import React, { useReducer } from "react";
import { PostReducer, INITIAL_STATE } from "./PostReducer";
import { ACTION_TYPES } from "./PostActionTypes";

export default function Post() {
  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

  const handlefetch = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  };

  return (
    <div>
      <button onClick={handlefetch}>
        {state.loading ? "Wait..." : "Fetch the Post"}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Something went wrong!!"}</span>
    </div>
  );
}
