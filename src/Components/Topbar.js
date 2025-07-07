import { BellIcon, MenuIcon } from '@heroicons/react/outline';

const Topbar = ({ setMobileSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b">
       <div className="flex items-center">
        <button 
          className="p-2 mr-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
          onClick={() => setMobileSidebarOpen(prev => !prev)}
        >
          <MenuIcon className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold">Business Dashboard</h2>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
          <BellIcon className="w-5 h-5" />
        </button>
        <div className="flex items-center">
          <div className="w-8 h-8 overflow-hidden bg-gray-200 rounded-full">
            <img 
              src="https://randomuser.me/api/portraits/men/1.jpg" 
              alt="User profile"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="ml-2 text-sm font-medium">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;