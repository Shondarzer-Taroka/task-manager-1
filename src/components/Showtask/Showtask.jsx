"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, Eye, Pencil, Trash } from "lucide-react";
import TaskModal from "../TaskModal/TaskModal";


const ShowTask = ({ tasks, onUpdateTask, onDeleteTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);


  const handleMarkComplete = (task) => {
    onUpdateTask(task._id, { completed: !task.completed });
  };

  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <Card key={task._id} className="p-4">
          <CardHeader>
            <CardTitle className={task.completed ? "line-through text-gray-500" : ""}>
              {task.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => { setSelectedTask(task); setIsViewOpen(true); }}>
              <Eye className="h-4 w-4 mr-1" /> View
            </Button>
            <Button size="sm" onClick={() => { setSelectedTask(task); setIsEditOpen(true); }}>
              <Pencil className="h-4 w-4 mr-1" /> Edit
            </Button>
            <Button size="sm" variant={task.completed ? "destructive" : "secondary"} onClick={() => handleMarkComplete(task)}>
              <CheckCircle className="h-4 w-4 mr-1" /> {task.completed ? "Undo" : "Mark"}
            </Button>
            <Button size="sm" variant="destructive" onClick={() => onDeleteTask(task._id)}>
              <Trash className="h-4 w-4 mr-1" /> Delete
            </Button>
          </CardContent>
        </Card>
      ))}

      {/* View Task Modal */}
      <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Task Details</DialogTitle>
          </DialogHeader>
          {selectedTask && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{selectedTask.title}</h2>
              <p className="text-gray-500">{selectedTask.description}</p>
              <p className="text-sm text-gray-400">Due Date: {new Date(selectedTask.dueDate).toDateString()}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Task Modal */}
      <TaskModal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} onSubmit={onUpdateTask} task={selectedTask} />
    </div>
  );
};

export default ShowTask;







