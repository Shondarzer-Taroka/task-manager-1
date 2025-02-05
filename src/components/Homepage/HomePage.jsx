"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import TaskModal from "../TaskModal/TaskModal";


const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleOpenModal = (task = null) => {
    setSelectedTask(task); // Set task for edit or null for new task
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleTaskSubmit = (taskData) => {
    if (selectedTask) {
      console.log("Updating Task:", { ...selectedTask, ...taskData });
    } else {
      console.log("Creating New Task:", taskData);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      {/* Button to Open Modal */}
      <Button onClick={() => handleOpenModal()}>Add Task</Button>

      {/* Reusable Task Modal */}
      <TaskModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleTaskSubmit} task={selectedTask} />
    </div>
  );
};

export default HomePage;
