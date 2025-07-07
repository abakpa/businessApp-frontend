// import { useState } from 'react';
import { 
  ChartBarIcon,
  UsersIcon,
  ShoppingCartIcon,
  BellIcon,
//   HomeIcon
} from '@heroicons/react/outline';


const BusinessDashboard = () => {
 
  
  // Mock data
  const businessStats = {
    revenue: '$12,345',
    customers: 243,
    orders: 56,
    growth: '+12%',
  };
  
  const recentActivities = [
    { id: 1, action: 'New order received', time: '2 mins ago' },
    { id: 2, action: 'Payment processed', time: '15 mins ago' },
    { id: 3, action: 'New customer registered', time: '1 hour ago' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">

      <div className="flex flex-col flex-1 overflow-hidden">

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Welcome back, John!</h1>
            <p className="text-gray-600">Here's what's happening with your business today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                  <ChartBarIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-lg font-semibold text-gray-700">{businessStats.revenue}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
                  <UsersIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Customers</p>
                  <p className="text-lg font-semibold text-gray-700">{businessStats.customers}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 mr-4 text-purple-500 bg-purple-100 rounded-full">
                  <ShoppingCartIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Orders</p>
                  <p className="text-lg font-semibold text-gray-700">{businessStats.orders}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Growth</p>
                  <p className="text-lg font-semibold text-gray-700">{businessStats.growth}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Activity */}
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className="flex-shrink-0 p-2 mt-1 mr-3 text-blue-500 bg-blue-100 rounded-full">
                      <BellIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800">
                View all activity
              </button>
            </div>

            {/* Business Overview */}
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">Business Overview</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Business performance chart will appear here</p>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>Your business is performing better than 85% of similar businesses.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessDashboard;