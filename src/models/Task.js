
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  completed: { type: Boolean, default: false },
});

// ✅ Prevent redefining the model if already exists
const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

export default Task; // ✅ Ensure it is a default export
