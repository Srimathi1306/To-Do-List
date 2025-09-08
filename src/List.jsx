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
  // Handle delete
  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index); // remove by index
    setList(updatedList);
  };
  const handleEdit = (index) => {
    setInputValue(list[index].text); // load item into input
    setEditIndex(index); // set index to edit mode
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
      <ul className="m-8 space-y-2">
        {list.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center"
          >
            <span className="text-lg">{item}</span>
            <button
              onClick={() => handleEdit(index)}
              className="text-blue-500 hover:text-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-700 transition-transform duration-200 ease-in-out hover:scale-110"
            >
              <p className="text-red-500 hover:text-red-700 text-xl font-bold">
                ✕
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
