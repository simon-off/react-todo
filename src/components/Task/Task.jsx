import { useEffect, useReducer } from "react";
import "./task.scss";

export default function Task({ task, tasks, setTasks }) {
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  useEffect(() => {
    task.checked = !checked;
    setTasks([...tasks.sort((a, b) => b.checked - a.checked)]);
  }, [checked, setTasks, task, tasks]);

  const removeTask = () => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };

  return (
    <div className={"task " + (checked ? "done " : "")}>
      <div>
        <button onClick={setChecked}>{checked ? <i className="fa fa-check"></i> : ""}</button>
        <p>{task.text}</p>
      </div>
      <button onClick={removeTask}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
}
