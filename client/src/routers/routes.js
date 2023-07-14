import Action from "../pages/Action";
import Important from "../pages/Important";
import Today from "../pages/Today";
import Planned from "../pages/Planned";

import Login from "../pages/Login";

const publicRouters = [
  { path: "/", component: Today },
  { path: "/important", component: Important },
  { path: "/action", component: Action },
  { path: "/planned", component: Planned },
  { path: "/auth", component: Login,layout:null },
];
const privateRouters = [];

export { publicRouters, privateRouters };
