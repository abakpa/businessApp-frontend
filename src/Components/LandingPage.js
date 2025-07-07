import React, { useState } from 'react';
import logo from '../Images/logo.png';
import heroBg from '../Images/landing-page.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
     <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
          </Link>
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4">
            <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Login
        </Link>
        <Link to="/register" className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition">
          Register
        </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 shadow rounded-b-lg absolute w-full z-10">
            <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600">Features</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Login
        </Link>
        <Link to="/register" className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition">
          Register
        </Link>
          </div>
        )}
      </header>

      <section className="relative h-[100vh] pt-20 flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="bg-black bg-opacity-50 p-6 md:p-10 rounded-xl text-center max-w-xl mx-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to BizManager</h1>
          <p className="text-base md:text-lg mb-6">Empower your business with efficient inventory, sales, and accounting tools.</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-full">Get Started</button>
        </div>
      </section>

      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Branch Management</h3>
              <p>Manage multiple branches seamlessly with real-time data.</p>
            </div>
            <div className="p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Inventory Tracking</h3>
              <p>Keep track of all stock with alerts for low inventory.</p>
            </div>
            <div className="p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Sales & Accounting</h3>
              <p>Record sales and monitor revenue with built-in accounting.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About BizManager</h2>
          <p>BizManager is built to support growing businesses with tools that simplify operations and enhance productivity. Join hundreds of businesses already using our platform to manage their daily tasks.</p>
        </div>
      </section>

      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4">Email us at support@bizmanager.com</p>
          <p>Or follow us on social media @bizmanager</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} BizManager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;