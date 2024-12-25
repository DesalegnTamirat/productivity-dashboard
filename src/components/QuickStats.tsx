import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Tasks Completed', value: 12 },
  { label: 'Habits Tracked', value: 8 },
  { label: 'Goals Achieved', value: 3 },
];

const QuickStats: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-md p-4 rounded-lg text-center"
        >
          <h2 className="text-2xl font-bold">{stat.value}</h2>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default QuickStats;
