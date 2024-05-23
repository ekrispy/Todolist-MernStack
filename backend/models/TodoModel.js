import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  user: {type: String, required: true},
});

const Todo = mongoose.model("Todos", todoSchema);

export default Todo;