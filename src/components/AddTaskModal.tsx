import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: Task) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAdd = () => {
    if (taskText.trim()) {
      const newTask = {
        id: Date.now(), // Unique ID based on timestamp
        text: taskText,
        completed: false,
      };
      onAddTask(newTask);
      setTaskText('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-80"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        <h3 className="text-xl font-bold mb-4">Add a New Task</h3>
        <input
          type="text"
          placeholder="Enter task description"
          className="w-full p-2 border rounded mb-4"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Task
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AddTaskModal;
