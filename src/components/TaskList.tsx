import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}


const TaskList = ({tasks, setTasks}: Props) => {
  const toggleComplete = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Tasks</h2>
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className={`p-4 rounded-lg shadow-md flex justify-between items-center ${
              task.completed ? 'bg-green-100' : 'bg-white'
            }`}
          >
            <span
              className={`text-lg ${
                task.completed ? 'line-through text-gray-500' : 'text-black'
              }`}
            >
              {task.text}
            </span>
            <div className="flex space-x-3">
              <button
                onClick={() => toggleComplete(task.id)}
                className={`px-4 py-2 rounded ${
                  task.completed ? 'bg-gray-300' : 'bg-green-500 text-white'
                }`}
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => removeTask(task.id)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
