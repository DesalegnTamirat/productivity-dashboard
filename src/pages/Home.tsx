import React from 'react';
import QuickStats from '../components/QuickStats';
import ProductivityChart from '../components/ProductivityChart';
import Greeting from '../components/Greeting';

const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Greeting Section */}
      <Greeting />

      {/* Quick Stats */}
      <QuickStats />

      {/* Productivity Chart */}
      <ProductivityChart />
    </div>
  );
};

export default Home;
