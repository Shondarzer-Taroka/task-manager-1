// "use client";

// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import TaskModal from "../TaskModal/TaskModal";
// import { createTask, getTasks } from "@/actions/task.action";
// import ShowTask from "../Showtask/Showtask";



// const HomePage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     async function fetchTasks() {
//       const data = await getTasks();
//       setTasks(data);
//     }
//     fetchTasks();
//   }, []);

//   const handleOpenModal = (task = null) => {
//     setSelectedTask(task); // Set task for edit or null for new task
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedTask(null);
//   };




// //   const handleTaskSubmit = (taskData) => {
// //     if (selectedTask) {
// //       console.log("Updating Task:", { ...selectedTask, ...taskData });
// //     } else {
// //       console.log("Creating New Task:", taskData);
// //     }
// //   };








// const handleTaskSubmit = async (taskData) => {
//     if (selectedTask) {
//       console.log("Updating Task:", { ...selectedTask, ...taskData });
//     } else {
//       try {
//         const newTask = await createTask(taskData);
//         console.log("Task Created:", newTask);
//       } catch (error) {
//         console.error("Error creating task:", error);
//       }
//     }
//     handleCloseModal(); // Close modal after submission
//   };
  
//   return (
//     <div className="flex flex-col items-center min-h-screen p-6">
//       {/* Button to Open Modal */}
//       <Button onClick={() => handleOpenModal()}>Add Task</Button>

//       {/* Reusable Task Modal */}
//       <TaskModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleTaskSubmit} task={selectedTask} />
//          <div>
//             <ShowTask tasks={tasks}  />
//          </div>
//     </div>
//   );
// };

// export default HomePage;








