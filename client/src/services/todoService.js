import instance from "../configs/config";

export const getAllTodo = ( navigate, accessToken) => {
    try {
      const res = instance.get("/todo", {
        headers: { token: `Bearer ${accessToken}`},
      });
      return res
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };
  export const createTodo = (formData, navigate, accessToken) => {
    try {
      const res = instance.post("/todo",formData, {
        headers: { token: `Bearer ${accessToken}`},
      });
      return res
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };
  export const updateTodo = (id,formData, navigate, accessToken) => {
    try {
      const res = instance.put(`/todo/${id}`,formData, {
        headers: { token: `Bearer ${accessToken}`},
      });
      return res
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };
  export const deleteCategory = (id, navigate, accessToken) => {
    try {
      const res = instance.delete(`/todo/${id}`, {
        headers: { token: `Bearer ${accessToken}`},
      });
      return res
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };
  