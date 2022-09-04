import classNames from "classnames";
import "bulma/css/bulma.css";

type Props = { todo: ToDo; onCheck: (todo: ToDo) => void };

export const ToDo = (props: Props) => {
  const { todo, onCheck } = props;

  const handleChange = () => {
    onCheck(todo);
  };
  return (
    <label className="panel-block">
      <input type="checkbox" checked={todo.done} onChange={handleChange} />
      <span className={classNames({ "has-text-grey-light": todo.done })}>
        {todo.text}
      </span>
    </label>
  );
};

export default ToDo;
