import { useState } from "react";
import { Filter, InputToDo, ToDo } from "./components/index";
import "bulma/css/bulma.css";

export const TodoApp = () => {
  const getKey = () => Math.random().toString(32).substring(2);

  const [todos, setToDos] = useState<ToDo[]>([]);
  const [filter, setFilter] = useState<ToDoFilter>("ALL");

  const handleAdd = (text: string) => {
    setToDos([...todos, { key: getKey(), text, done: false }]);
  };

  const handleFilterChange = (value: ToDoFilter) => setFilter(value);

  const displayToDos = todos.filter((todo) => {
    if (filter === "TODO") return !todo.done;
    if (filter === "DONE") return todo.done;
    return true;
  });

  const handleCheck = (checked: ToDo) => {
    const newToDos = todos.map((todo) => {
      if (todo.key === checked.key) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setToDos(newToDos);
  };

  return (
    <div className="panel is-warning">
      <div className="panel-heading">ToDo</div>
      <InputToDo onAdd={handleAdd} />
      <Filter onChange={handleFilterChange} value={filter} />
      {displayToDos.map((todo) => (
        <ToDo key={todo.key} todo={todo} onCheck={handleCheck} />
      ))}
      <div className="panel-block">{displayToDos.length} todos</div>
    </div>
  );
};

export default TodoApp;
