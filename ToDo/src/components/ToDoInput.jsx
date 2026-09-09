function ToDoInput({ task, setTask, input, setInput }) {
  return (
    <div className="mx-auto mt-6 w-full max-w-5xl px-4 sm:px-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let newTask = input.trim();
          if(newTask && !task.includes(newTask)){
            setTask([...task, newTask]);
            setInput("");
          }
          else{
            alert("Task already in the List");
          }
        }}
        className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-[0_18px_45px_rgba(34,49,41,0.12)] sm:flex-row sm:items-center"
      >
        <label htmlFor="ip" className="px-2 text-sm font-semibold text-[#52645a]">Enter Task</label>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="min-w-0 flex-1 rounded-xl border border-[#dfe5dc] bg-[#f7f8f5] px-4 py-3 text-[#1e2924] outline-none transition placeholder:text-[#9aa89e] focus:border-[#6f8b6d] focus:ring-4 focus:ring-[#dce8d7]"
          type="text"
          id="ip"
          placeholder="Task"
        />
        <button className="w-full rounded-xl bg-[#d3e4a5] px-6 py-3 font-semibold text-[#273727] transition hover:bg-[#c1d68b] focus:outline-none focus:ring-4 focus:ring-[#dce8d7] sm:w-auto">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ToDoInput;
