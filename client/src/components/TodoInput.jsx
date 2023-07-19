import { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import * as todoService from "../services/todoService";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
function TodoInput({ toDoList, setToDoList }) {
  const [formData, setFormData] = useState({
    task_name: "",
    description: "",
  });
  const [isActive, setIsActive] = useState(false);

  const user = useSelector((state) => state.auth.login.currentUser);
  const idUser = user.account._id;
  const accessToken = user.accessToken;
  const navigate = useNavigate();

  const handleSubmid = async (e) => {
    e.preventDefault();
    if (formData.task_name === "" || formData.description === "")
      return toast.error("chua nhap đủa thông tin");
    const res = await todoService.createTodo(
      { ...formData, id_user: idUser },
      navigate,
      accessToken
    );
    if (res) {
      toast.success("Add successfully");
    }
    setToDoList([...toDoList, formData]);
    setFormData({
      task_name: "",
      description: "",
    });
  };
  const handleOnChangeInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="px-[55px]">
      {isActive ? (
        <div className="rounded-md border-gray-300 border-solid border-[1px]">
          <form className="flex flex-col pt-[10px] px-[10px] border-gray-300 border-solid border-b-[1px]">
            <input
              type="text"
              placeholder="Task name"
              value={formData.task_name}
              onChange={handleOnChangeInput}
              name="task_name"
              className="outline-none text-[#202020] "
            />
            <input
              type="text"
              placeholder="Description"
              value={formData.description}
              onChange={handleOnChangeInput}
              name="description"
              className="outline-none text-[#202020] "
            />
          </form>
          <div className="mt-[10px] p-2 flex justify-between items-center">
            <div className="">
              <FontAwesomeIcon icon={faHome} />
              <span>input</span>
            </div>
            <div className="">
              <Button onClick={() => setIsActive(false)}>Cancel</Button>
              <Button primary onClick={handleSubmid}>
                Add task
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="" onClick={() => setIsActive(true)}>
          <Button primary>Add Task</Button>
        </div>
      )}
    </div>
  );
}

TodoInput.propTypes = {
  toDoList: PropTypes.array,
  setToDoList: PropTypes.func,
};

export default TodoInput;
