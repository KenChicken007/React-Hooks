import "./App.css";
import SamplePage from "./components/UseState&Effect/Counter";
import UseContext from "./components/useContext/video/UseContext.js";
import Book_list from "./components/useContext/blog/Book_list";
import Ref from "./components/useRef/Ref";
import Resource from "./components/UseState&Effect/Resource";
import Windows from "./components/UseState&Effect/windows";

function App() {
  return (
    <div className="noSelect">
      {/* <SamplePage /> */}
      {/* <UseContext /> */}
      {/* <Book_list /> */}
      {/* <Ref /> */}
      {/* <Resource /> */}
      <Windows />
    </div>
  );
}

export default App;
