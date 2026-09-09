import { useState } from "react";

function ToDoList({ task, setTask }) {
  const [editedId, setEditedId] = useState(null);
  const [editedText, setEditedText] = useState("");

  return (
    <div className="mx-auto mt-6 w-full max-w-3xl rounded-3xl bg-gradient-to-r from-[#23395d] via-[#406e8e] to-[#8fc1d4] p-1 px-4 pb-12 sm:px-8">
      <div className="flex flex-col gap-3 mt-5">
        {task.map((value, index) => (
          <div
            key={index}
            className="flex min-h-16 flex-col items-stretch justify-between gap-3 rounded-2xl border border-black/5 bg-gradient-to-r from-white to-[#eaf6f8] px-4 py-3 shadow-[0_8px_24px_rgba(34,49,41,0.06)] sm:flex-row sm:items-center"
          >
            {editedId === index ? (
              <>
                <input
                  className="min-w-0 flex-1 rounded-lg border border-[#dfe5dc] bg-[#f7f8f5] px-3 py-2 outline-none focus:border-[#6f8b6d]"
                  value={editedText}
                  onChange={(e) => {
                    setEditedText(e.target.value);
                  }}
                />
                <button
                  className="w-full rounded-lg bg-[#d3e4a5] px-4 py-2 font-semibold text-[#273727] hover:bg-[#c1d68b] sm:w-auto"
                  onClick={() => {
                    let newTask = [...task];
                    newTask[editedId] = editedText;
                    setTask(newTask);
                    setEditedId(null);
                    setEditedText("");
                  }}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                <div className="flex min-w-0 items-center gap-3">
                  <input type="checkbox" className="peer h-5 w-5 accent-[#6f8b6d]" />
                  <span className="break-words text-[#33443a] peer-checked:text-[#8b978d] peer-checked:line-through">{value}</span>
                </div>
                <div className="flex shrink-0 items-center justify-end gap-2">
                  <div
                    onClick={() => {
                      setEditedId(index);
                      setEditedText(value);
                    }}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-[#607264] transition hover:bg-[#edf2e9] hover:text-[#263c35]"
                  >
                    Edit
                  </div>
                  <div
                    onClick={() => {
                      let updatedTask = task.filter((value, i) => index !== i);
                      setTask(updatedTask);
                    }}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-[#b35e52] transition hover:bg-[#fff0ed]"
                  >
                    Delete
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
