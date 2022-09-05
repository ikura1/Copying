import {
  ChangeEvent,
  FormEvent,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type Params = { setTodos: Dispatch<SetStateAction<Todo[]>> };

const AddTodo = (params: Params) => {
  const { setTodos } = params;
  const [task, setTask] = useState("");

  const handleNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task === "") return;
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      Add Task:{" "}
      <input value={task} placeholder="Add New Task" onChange={handleNewTask} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
