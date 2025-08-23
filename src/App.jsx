import List from "./List.jsx";
import Header from "./Header.jsx";
export default function App() {
  return (
    <div className="list-box">
      <Header />
      <div className="flex justify-center align-center m-8 p-4">
        <List />
      </div>
    </div>
  );
}
