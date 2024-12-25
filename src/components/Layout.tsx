import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const sidebarLinks = ["Home", "Tasks", "Habits", "Goals"];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-4 space-y-2"
          >
            {sidebarLinks.map((link) => (
            <Link to={`/${link == "Home" ? "": link}`}>
              <motion.li
                key={link}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                className="p-2 rounded"
              >
                {link}
              </motion.li>
              </Link>
            ))}
          </motion.ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-b from-gray-100 to-gray-300 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
