// import ClassContextComponent from "./ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

export default function UseContext() {
  return (
    <>
      <ThemeProvider>
        {/* <ClassContextComponent /> */}
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}
