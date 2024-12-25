import React from 'react';

const Greeting: React.FC = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning!';
    if (hour < 18) return 'Good Afternoon!';
    return 'Good Evening!';
  };

  return (
    <div className="mb-6">
      <h1 className="text-4xl font-bold">{getGreeting()}</h1>
      <p className="text-gray-600">Here’s what your day looks like:</p>
    </div>
  );
};

export default Greeting;
