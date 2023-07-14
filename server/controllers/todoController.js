import { TodoModel } from "../models/Todo.js";
import md5 from "md5";
export const todoController = {
  //GET TODO
  getAllTodo: async (req, res) => {
    try {
      const todo = await TodoModel.find();
      res.status(200).json(todo);
    } catch (error) {
      console.log(error);
    }
  },
  getOneTodo: async (req, res) => {
    try {
      const todo = await TodoModel.findOne(req.body._id);
      res.status(200).json(todo);
    } catch (error) {
      console.log(error);
    }
  },
  createTodo:async(req,res) => {
      
},
  updateTodo:async(req,res) => {
      
},
  deleteTodo: async (req, res) => {
    TodoModel.findByIdAndRemove(req.params.id)
      .then((data) => {
        if (data) {
          res.status(200).json({
            message: "Todo deleted successfully",
            todo: data,
          });
        } else {
          res.status(403).json({
            message: "Todo deleted failed",
          });
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
