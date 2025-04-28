import './App.css';
import Home from "./layouts/Home";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

export default App;
