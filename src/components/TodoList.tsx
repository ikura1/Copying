import { Dispatch, SetStateAction } from "react";

type Params = { todos: Todo[]; setTodos: Dispatch<SetStateAction<Todo[]>> };

const TodoList = (params: Params) => {
  const { todos, setTodos } = params;

  const handleUpdateTask = (index: number) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    setTodos(newTodos);
  };

  const handleRemoveTask = (index: number) => {
    const newTodos = [...todos].filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          style={{
            textDecorationLine: todo.isCompleted ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleUpdateTask(index)}
          />
          {todo.task}
          <span onClick={() => handleRemoveTask(index)}> X</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
