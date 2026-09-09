import { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  return (
      <div className='flex min-h-screen flex-col bg-[#f4f1eb] text-[#1e2924]'>
        <div className='bg-[#263c35] px-6 py-8 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
          <h1>To Do List</h1>
        </div>
        <ToDoInput task={task} setTask={setTask} input={input} setInput={setInput} />
        <ToDoList task={task} setTask={setTask} />
      </div>
  );
}

  export default App
