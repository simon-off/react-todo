import { useState } from "react";
import "./app.scss";
import Task from "./components/Task/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([{ text: input, id: input + new Date().getTime() }, ...tasks]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>todo</h1>
      <form onSubmit={addTask} className="task-input-container">
        <input
          id="task-input"
          type="text"
          placeholder="I'm gonna"
          aria-label="tasks input"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-plus"></i>
        </button>
      </form>
      <div className="task-list">
        {tasks.map((task) => {
          return <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />;
        })}
      </div>
    </div>
  );
}

export default App;
