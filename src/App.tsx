import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
