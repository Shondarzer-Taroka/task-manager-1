
"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePickerDemo } from "@/components/ui/DatePickerDemo"; // Importing your DatePicker

const TaskModal = ({ isOpen, onClose, onSubmit, task }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);

  // Populate fields when editing a task
  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setDueDate(task.dueDate ? new Date(task.dueDate) : null);
    } else {
      setTitle("");
      setDescription("");
      setDueDate(null);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, dueDate: dueDate ? dueDate.toISOString() : null }); // Convert date to ISO format
    onClose(); // Close modal after submit
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{task ? "Update Task" : "Add New Task"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Field */}
          <div>
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Enter task title" />
          </div>

          {/* Due Date Picker */}
          <div>
            <Label>Due Date</Label><br />
            <DatePickerDemo date={dueDate} setDate={setDueDate} />
          </div>

          {/* Description Field */}
          <div>
            <Label>Description</Label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task details..." />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            {task ? "Update Task" : "Create Task"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
