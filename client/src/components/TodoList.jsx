import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import Button from "./Button";
import * as todoService from "../services/todoService";
function ToDoList({ toDoList, reRenderPage, setReRenderPage }) {
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user.accessToken;
  const navigate = useNavigate();
  const handleUpdateCheckBox = async (tasks) => {
    await todoService.updateTodo(
      tasks._id,
      { ...tasks, completed: !tasks.completed },
      navigate,
      accessToken
    );
    setReRenderPage(!reRenderPage);
  };
  function handleClick(e, data) {
    console.log(data.foo);
  }
  return (
    <div className="">
      {toDoList?.length === 0 && "No To Do List"}
      {toDoList?.map((item) => (
        <ContextMenuTrigger key={item._id} id={item._id}>
          <li>
            <label htmlFor="item">
              <input
                type="checkbox"
                checked={item.completed === true}
                onChange={() => handleUpdateCheckBox(item)}
              />
            </label>
            {item.task_name}
          </li>
          <ContextMenu id="same_unique_identifier">
            <MenuItem data={{ foo: "sửa" }} onClick={handleClick}>
              <Button>Sửa</Button>
            </MenuItem>
            <MenuItem data={{ foo: "xóa" }} onClick={handleClick}>
              <Button>Xóa</Button>
            </MenuItem>
          </ContextMenu>
        </ContextMenuTrigger>
      ))}
    </div>
  );
}
ToDoList.propTypes = {
  toDoList: PropTypes.array,
  reRenderPage: PropTypes.bool,
  setReRenderPage:PropTypes.func
};

export default ToDoList;
