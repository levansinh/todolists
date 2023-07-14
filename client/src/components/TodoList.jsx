import { useState } from "react";
import Button from "./Button";
import { toast } from "react-toastify";
function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");

  const handleSubmid = (e) => {
    e.preventDefault();
    if (toDo === "") return toast.error("Bạn chưa nhập nhiệm vụ");
    setToDoList((prevToDo) => {
      return [...prevToDo, toDo];
    });
    setToDo("");
  };

  const toGoggleInput = () => {
    setToDoList((prevToDoList) => {
        prevToDoList
    });
  };
  console.log(toDoList);
  return (
    <div className="">
      {toDoList?.length === 0 && "No To Do List"}
      {toDoList?.map((item, index) => (
        <li key={index}>
          <label htmlFor="item">
            <input
              type="checkbox"
              checked={item.complete}
              onChange={(e) => toGoggleInput(index, e.target.checked)}
            />
          </label>
          {item}
        </li>
      ))}
      <form action="">
        <div className="">
          <input
            type="text"
            placeholder="Press and Enter"
            name="todo"
            onChange={(e) => setToDo(e.target.value)}
            value={toDo}
          />
        </div>
        <Button onClick={handleSubmid} primary>
          Gửi
        </Button>
      </form>
    </div>
  );
}

export default ToDoList;
