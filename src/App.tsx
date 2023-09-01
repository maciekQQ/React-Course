import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";

function App() {
  return <TaskList />;
}

export default App;
