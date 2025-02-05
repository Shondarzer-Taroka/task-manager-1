// //        src/actions/task.action.js
"use server";

import { connectDB } from "@/lib/db/mongodb";
import Task from "@/models/Task";



export async function getTasks() {
  await connectDB();
  const tasks = await Task.find({});
  return JSON.parse(JSON.stringify(tasks));
}

export async function createTask(data) {
  await connectDB();
  const newTask = await Task.create(data);
  return JSON.parse(JSON.stringify(newTask));
}

export async function updateTask(id, data) {
  await connectDB();
  const updatedTask = await Task.findByIdAndUpdate(id, data, { new: true });
  return updatedTask ? JSON.parse(JSON.stringify(updatedTask)) : null;
}

export async function deleteTask(id) {
  await connectDB();
  await Task.findByIdAndDelete(id);
  return { message: "Task deleted successfully" };
}
