import { useState, useEffect } from "react";
import Helmet from "../components/Helmet";
import HeaderPage from "../components/HeaderPage";
import ToDoList from "../components/TodoList";
import { useSelector } from "react-redux";
import TodoInput from "../components/TodoInput";
import { useNavigate } from "react-router-dom";
import * as todoService from "../services/todoService";
function Today() {
  const [toDoList, setToDoList] = useState([]);
  const [reRenderPage, setReRenderPage] = useState(false);
  const user = useSelector((state) => state.auth.login.currentUser);
  const idUser = user.account._id;
  const accessToken = user.accessToken;
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await todoService.getAllTodo(idUser, navigate, accessToken);
      setToDoList(res.data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reRenderPage]);

  const getCurrentDate = () => {
    const date = new Date();

    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      timeZone: "UTC",
      timeZoneName: "short",
    };

    const formatter = new Intl.DateTimeFormat("vi-VN", options);
    const formattedDate = formatter.format(date).slice(8);

    return formattedDate;
  };

  return (
    <Helmet title="Today">
      <HeaderPage title="Today" subTitle={getCurrentDate()} />
      <ToDoList
        toDoList={toDoList}
        setToDoList={setToDoList}
        reRenderPage={reRenderPage}
        setReRenderPage={setReRenderPage}
      />
      <TodoInput toDoList={toDoList} setToDoList={setToDoList} />
    </Helmet>
  );
}
export default Today;
