
"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import TaskModal from "../TaskModal/TaskModal";
import { createTask, getTasks, updateTask, deleteTask } from "@/actions/task.action";
import ShowTask from "../Showtask/Showtask";
import { Loader2 } from "lucide-react"


const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [refetch,setRefetch]=useState(false)
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    async function fetchTasks() {
      setLoading(true)
      const data = await getTasks();
      setTasks(data);
      setLoading(false)
    }
    fetchTasks();
  }, [refetch]);

  const handleOpenModal = (task = null) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleTaskSubmit = async (taskData) => {
    if (selectedTask) {
      try {
        const updatedTask = await updateTask(selectedTask._id, taskData);
        if (updatedTask) {
          setTasks((prevTasks) =>
            prevTasks.map((task) =>
              task._id === updatedTask._id ? updatedTask : task
            )
          );
          setRefetch(!refetch)
        }
      } catch (error) {
        console.error("Error updating task:", error);
      }
    } else {
      try {
        const newTask = await createTask(taskData);
        if (newTask) {
          setTasks((prevTasks) => [...prevTasks, newTask]);
          setRefetch(!refetch)
        }
      } catch (error) {
        console.error("Error creating task:", error);
      }
    }
    handleCloseModal();
  };

  const handleUpdateTask = async (taskId, updatedData) => {
    try {
      const updatedTask = await updateTask(taskId, updatedData);
      if (updatedTask) {
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
        );
        setRefetch(!refetch)
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
        console.log('delete id',taskId);
        
        await deleteTask(taskId); // Make sure this API call works correctly
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
        console.error("Error deleting task:", error);
    }
};


 if (loading) {
    return <div className="flex justify-center"> <Loader2 className="animate-spin mr-2 " /></div>
 }

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <Button onClick={() => handleOpenModal()}>Add Task</Button>

      <TaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleTaskSubmit}
        task={selectedTask}
      />

      <div>
        {/* <ShowTask tasks={tasks} setTasks={setTasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} /> */}
    
        <ShowTask tasks={tasks} setTasks={setTasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />

      </div>
    </div>
  );
};

export default HomePage;

