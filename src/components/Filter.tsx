import classNames from "classnames";
import { MouseEvent } from "react";
import "bulma/css/bulma.css";

type Props = { value: string; onChange: (value: ToDoFilter) => void };
export const Filter = (props: Props) => {
  const { value, onChange } = props;

  const handleClick = (
    key: ToDoFilter,
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    onChange(key);
  };

  return (
    <div className="panel-tabs">
      <button
        onClick={(event) => handleClick("ALL", event)}
        className={classNames({ "is-active": value === "ALL" })}
      >
        ALL
      </button>
      <button
        onClick={(event) => handleClick("TODO", event)}
        className={classNames({ "is-active": value === "TODO" })}
      >
        ToDo
      </button>
      <button
        onClick={(event) => handleClick("DONE", event)}
        className={classNames({ "is-active": value === "DONE" })}
      >
        Done
      </button>
    </div>
  );
};

export default Filter;
