import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./FormValidation/UserProfile/UserProfile";
import DemoJSS from "./JSS_StyledComponents/DemoJSS/DemoJSS";
import DemoTheme from "./JSS_StyledComponents/Themes/DemoTheme";
import ToDoList from "./JSS_StyledComponents/BaiTapStyledComponents/ToDoList/ToDoList";
import LifeCycleReact from "./LifeCycleReact/LifeCycleReact";
import DemoHookUseState from "./Hooks/DemoHookUseState";
import DemoHookUseEffect from "./Hooks/DemoHookUseEffect";
import DemoHookUseCallback from "./Hooks/DemoHookUseCallback";
import DemoHookUseMemo from "./Hooks/DemoHookUseMemo";
import DemoHookUseRef from "./Hooks/DemoHookUseRef";
import DemoHookUseReducer from "./Hooks/DemoHookUseReducer";
import DemoHookUseContext from "./Hooks/DemoHookUseContext";
import ContextProvider from "./Hooks/Context/ContextProvider";
import DemoReduxApp from "./Hooks/Context/DemoReduxApp";
import DemoUseSpring from "./Hooks/ReactSpring/DemoUseSpring";

function App() {
  return (
    <ContextProvider>
      {/* <UserProfile /> */}
      {/* <DemoJSS /> */}
      {/* <DemoTheme /> */}
      {/* <ToDoList /> */}
      {/* <LifeCycleReact /> */}
      {/* <DemoHookUseState /> */}
      {/* <DemoHookUseEffect /> */}
      {/* <DemoHookUseCallback /> */}
      {/* <DemoHookUseMemo /> */}
      {/* <DemoHookUseRef /> */}
      {/* <DemoHookUseReducer /> */}
      {/* <DemoHookUseContext /> */}
      {/* <DemoReduxApp /> */}
      <DemoUseSpring />
    </ContextProvider>
  );
}

export default App;
