export default function List() {
  return (
    <div>
      <form className="m-8 flex gap-4">
        <input type="text" placeholder="Add to list" className="border" />
        <button type="submit" classNmae="bg-blue-500 ">
          Add List
        </button>
      </form>
      <div
        className="bg-blue-300 text-white px-4 py-2 rounded-lg shadow-md
          transition-transform duration-200 ease-in-out
          hover:bg-blue-600 hover:scale-105 hover:shadow-lg
          active:scale-95 active:bg-blue-700
          focus:ring-2 focus:ring-blue-300"
      >
        hello
      </div>
    </div>
  );
}
