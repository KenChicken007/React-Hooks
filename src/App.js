import "./App.css";
//UseState
// import SamplePage from "./components/UseState&Effect/Counter";
// import Resource from "./components/UseState&Effect/Resource";
// import Windows from "./components/UseState&Effect/windows";

//Context
// import UseContext from "./components/useContext/video/UseContext.js";
// import Book_list from "./components/useContext/blog/Book_list";

//Ref
// import Ref from "./components/useRef/Ref";

//Memo
// import Count from "./components/useMemo/Count";
// import Name_List from "./components/useMemo/List";

//Reducer
// import Post from "./components/useReducer/Post/Post";
// import Form from "./components/useReducer/Form/Form";
// import Reducer from "./components/useReducer/Blog/todoReducer";

//Custom Hook
import { QueryClient, QueryClientProvider } from "react-query";
// import { Cat } from "./components/Custom_Hook/Cat";
// import { Counter } from "./components/Custom_Hook/Counter";
// import Copy from "./components/Custom_Hook/Clipboard/Copy";
import StickyHeader from "./components/Custom_Hook/Page_Bottom/StickyHeader";

function App() {
  const queryClient = new QueryClient({
    defaultQueryObserverOptions: {},
  });

  return (
    <div className="noSelect">
      {/* <SamplePage /> */}
      {/* <UseContext /> */}
      {/* <Book_list /> */}
      {/* <Ref /> */}
      {/* <Resource /> */}
      {/* <Windows /> */}
      {/* <Count /> */}
      {/* <Name_List /> */}
      {/* <Post /> */}
      {/* <Form /> */}
      {/* <Reducer /> */}
      <QueryClientProvider client={queryClient}>
        {/* <Cat /> */}
        {/* <Counter /> */}
      </QueryClientProvider>
      {/* <Copy /> */}
      <StickyHeader />
    </div>
  );
}

export default App;
