// src/components/Sidebar.js
import { 
    HomeIcon, 
    ChartBarIcon, 
    UsersIcon, 
    CogIcon, 
    ShoppingCartIcon,
    DocumentTextIcon,
    XIcon 
  } from '@heroicons/react/outline';
  import { Link } from 'react-router-dom';
  
  const SideBar = ({ activeTab, setActiveTab, mobileSidebarOpen, setMobileSidebarOpen }) => {
    return (
        <>
        {/* Mobile Sidebar Backdrop */}
        {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-indigo-700 text-white transition-transform duration-300 ease-in-out ${
        mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0`}>
        
        {/* Sidebar Content */}
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-14 px-4 bg-indigo-800">
          <Link to="/">
            <h1 className="text-xl font-bold">BusinessHub</h1>
            </Link>
            <li 
              className="p-1 mr-2 text-white rounded-lg md:hidden hover:bg-indigo-600"
              onClick={() => setMobileSidebarOpen(false)}
            >
              <XIcon className="w-6 h-6" />
            </li>
          </div>
          
          <nav className="flex-1 px-4 py-4 overflow-y-auto">
            <li
            
              className='flex items-center w-full px-4 py-2 rounded-lg mb-2'
              onClick={() => setMobileSidebarOpen(false)}
            >
              <HomeIcon className="w-5 h-5 mr-3" />
              Dashboard
            </li>
            <li
              className='flex items-center w-full px-4 py-2 rounded-lg'
              onClick={() => setMobileSidebarOpen(false)}
            >
              <ChartBarIcon className="w-5 h-5 mr-3" />
              Analytics
            </li>
            <Link to="/viewbranch">
            <li
              className='flex items-center w-full px-4 py-2 rounded-lg' 
              onClick={() => setMobileSidebarOpen(false)}
            >
              <ChartBarIcon className="w-5 h-5 mr-3" />
              Branches
            </li>
            </Link>
            <li
              className='flex items-center w-full px-4 py-2 rounded-lg'
              onClick={() => setMobileSidebarOpen(false)}
            >
              <UsersIcon className="w-5 h-5 mr-3" />
              Customers
            </li>
            <li
              className='flex items-center w-full px-4 py-2 rounded-lg'
              onClick={() => setMobileSidebarOpen(false)}
            >
              <ShoppingCartIcon className="w-5 h-5 mr-3" />
              Orders
            </li>
            <li
              className='flex items-center w-full px-4 py-2 rounded-lg'
              onClick={() => setMobileSidebarOpen(false)}
            >
              <DocumentTextIcon className="w-5 h-5 mr-3" />
              Reports
            </li>
            <div className="pt-4 mt-4 border-t border-indigo-600">
              <li
                className='flex items-center w-full px-4 py-2 rounded-lg'
                onClick={() => setMobileSidebarOpen(false)}
              >
                <CogIcon className="w-5 h-5 mr-3" />
                Settings
              </li>
            </div>
          </nav>
        </div>
      </div>
      </>
    );
  };
  
  export default SideBar;