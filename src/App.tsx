import React from 'react';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Productivity Dashboard</h1>
        <p>Start building your productivity tools here!</p>
      </div>
    </Layout>
  );
};

export default App;
