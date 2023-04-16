export const INITIAL_STATE = {
  loading: false,
  post: {},
  error: false,
};

export const PostReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        post: {},
        error: false,
      };
    //We used spread property instead of writing error: false again to make code more readible
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: true,
      };
    default:
      return state;
  }

  //Functional code but Bad Practice
  //   if (action.type === "FETCH_START") {
  //     return {
  //       loading: true,
  //       post: {},
  //       error: false,
  //     };
  //   } else if (action.type === "FETCH_START") {
  //     return {
  //       loading: false,
  //       post: action.playload,
  //       error: false,
  //     };
  //   } else if (action.type === "FETCH_ERROR") {
  //     return {
  //       loading: false,
  //       post: action.playload,
  //       error: true,
  //     };
  //   }
};
