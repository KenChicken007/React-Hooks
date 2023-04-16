import { useReducer, useRef } from "react";
import { INITIAL_STATE, formReducer } from "./formReducer";
import { ACTION_TYPES } from "./formActionReducer";

export default function Form() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const tagRef = useRef(null);
  const handleChange = (e) => {
    dispatch({
      type: ACTION_TYPES.CHANGE_INPUT,
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: ACTION_TYPES.ADD_TAG, payload: tag });
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="Desc"
          onChange={handleChange}
          name="desc"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
        />
        <p>Category:</p>
        <select onChange={handleChange} name="category">
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <br />
        <button onClick={handleTags} type="button">
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag) => (
            <small
              style={{
                margin: "10px",
                padding: "5px",
                backgroundColor: "#e3e6e8",
              }}
              onClick={() =>
                dispatch({ type: ACTION_TYPES.REMOVE_TAG, payload: tag })
              }
              key={tag}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button
            type="button"
            onClick={() => dispatch({ type: ACTION_TYPES.DECREASE })}
          >
            -
          </button>
          <span style={{ margin: "10px" }}>Quantity ({state.quantity})</span>
          <button
            type="button"
            onClick={() => dispatch({ type: ACTION_TYPES.INCREASE })}
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
}
