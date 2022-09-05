import { useState } from "react";
import { AddTodo, TodoList } from "./components/index";

const TodoApp = () => {
  const initialState = [
    { task: "Lean react.js", isCompleted: false },
    {
      task: "Lean React Hook",
      isCompleted: false,
    },
    { task: "Learn Gatsby.js", isCompleted: false },
  ];

  const [todos, setTodos] = useState<Todo[]>(initialState);

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
