import { useState } from "react";
export default function List() {
  const [inputValue, setInputValue] = useState(""); // state to store input
  const [list, setList] = useState([]); // state to store all items

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    if (inputValue.trim() === "") return; // avoid empty inputs
    setList([...list, inputValue]); // add new item to list
    setInputValue(""); // clear input after submit
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-8 flex gap-4">
        <input
          type="text"
          value={inputValue} // controlled input
          onChange={(e) => setInputValue(e.target.value)} // update state
          placeholder="Add to list"
          className="border hover:border-blue-500 hover:border-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-300 text-white px-4 py-2 rounded-lg shadow-md
          transition-transform duration-200 ease-in-out
          hover:bg-blue-600 hover:scale-105 hover:shadow-lg
          active:scale-95 active:bg-blue-700
          focus:ring-2 focus:ring-blue-300"
        >
          Add List
        </button>
      </form>
    </div>
  );
}
