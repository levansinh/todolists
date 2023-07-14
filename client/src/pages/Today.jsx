import Helmet from "../components/Helmet";
import HeaderPage from "../components/HeaderPage";
import ToDoList from "../components/TodoList";
import { useSelector } from "react-redux";
import TodoInput from "../components/TodoInput";

function Today() {
  const user = useSelector((state) =>state.auth.login.currentUser);
  console.log(user);
  return (
    <Helmet title="Today">
      <HeaderPage title="Today" subTitle={"123"} />
      <ToDoList />
      <TodoInput/>
    </Helmet>
  );
}
export default Today;
