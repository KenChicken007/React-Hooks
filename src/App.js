import "./App.css";
import SamplePage from "./components/UseState&Effect";
import UseContext from "./components/useContext/video/UseContext.js";
import Book_list from "./components/useContext/blog/Book_list";
function App() {
  return (
    <div className="noSelect">
      {/* <SamplePage /> */}
      {/* <UseContext /> */}
      <Book_list />
    </div>
  );
}

export default App;
