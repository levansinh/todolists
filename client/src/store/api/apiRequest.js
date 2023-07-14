import { loginFailed, loginStart, loginSuccess } from "../auth/authSlice";

import instance from "../../configs/config";

export const loginUser = async (user, dispatch, navigate) => {
  console.log(user);
  try {
    dispatch(loginStart());
    const res = await instance.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    if (res) {
      navigate("/");
    }
    localStorage.setItem("accessToken", res.data.accessToken);
    return res.data;
  } catch (err) {
    dispatch(loginFailed(err));
  }
};
export const registerUser = (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = instance.post("/auth/register", user);
    // console.log(res.data);
    dispatch(loginSuccess(res.data));
    navigate("/auth");
  } catch (error) {
    dispatch(loginFailed());
  }
};
