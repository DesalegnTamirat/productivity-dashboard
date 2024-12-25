import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav>
          <ul className="mt-4 space-y-2">
            <li className="hover:bg-gray-700 p-2 rounded">Home</li>
            <li className="hover:bg-gray-700 p-2 rounded">Tasks</li>
            <li className="hover:bg-gray-700 p-2 rounded">Habits</li>
            <li className="hover:bg-gray-700 p-2 rounded">Goals</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
