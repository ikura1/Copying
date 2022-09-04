import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import "bulma/css/bulma.css";

type Props = {
  onAdd: (text: string) => void;
};

export const InputTodo = (props: Props) => {
  const [text, setText] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    if (!text.match(/\S/g)) return;
    props.onAdd(text);
    setText("");
  };

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></input>
    </div>
  );
};

export default InputTodo;
