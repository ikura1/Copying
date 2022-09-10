import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

type AppProps = { tasks: TodoProps[] };

function App(props: AppProps) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState<FilterState>("ALL");

  const addTask = (name: string) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  };

  const editTask = (id: string, newName: string) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  };

  const FILTER_MAP: { [key in FilterState]: (task: TodoProps) => boolean } = {
    ALL: () => true,
    Active: (task: TodoProps) => !task.completed,
    Completed: (task: TodoProps) => task.completed,
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP) as FilterState[];
  const filterList = FILTER_NAMES.map((name: FilterState) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  const prevTaskLength = usePrevious(tasks.length);
  useEffect(()=> {
    if (tasks.length - prevTaskLength) === -1{
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength])
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
