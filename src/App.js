import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Register from './Components/Register';
import BusinessDashboard from './Components/BusinessDashboard';
import CreateBusiness from './Components/CreateBusiness';
import CreateBranch from './Components/CreateBranch';
import ViewBranch from './Components/ViewBranches';
import Topbar from './Components/Topbar';
import SideBar from './Components/SideBar';

function App() {
    const [activeTab, setActiveTab] = useState('dashboard');
      const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
      const token = localStorage.getItem("authToken");
  return (
    <Router>
     <div className="mx-auto relative flex  h-screen ">
      {token &&(
      <SideBar
         activeTab={activeTab} 
         setActiveTab={setActiveTab}
         mobileSidebarOpen={mobileSidebarOpen}
         setMobileSidebarOpen={setMobileSidebarOpen}
      />
      )}
        <main className="flex flex-col flex-1">
          {token &&(
          <Topbar  setMobileSidebarOpen={setMobileSidebarOpen}/>
          )}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/createbranch" element={<CreateBranch />} />
            <Route path="/viewbranch" element={<ViewBranch />} />
            <Route path="/businessdashboard/:businessId" element={<BusinessDashboard />} />
            <Route path="/createbusiness/:ownerId" element={<CreateBusiness />} />
          </Routes>
        </main>
        <Routes>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;