import React, { useState } from "react";
import Cookies from 'js-cookie';
import { Home, List, PlusSquare, User, LogOut, BarChart, Settings, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('authtoken'));
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('authtoken');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu size={24} className="text-gray-800" />
            </button>
            <a href="/" className="hidden md:flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <Home size={20} /> <span>Home</span>
            </a>
            <a href="/products" className="hidden md:flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <List size={20} /> <span>Products</span>
            </a>
            <a href="/product-form" className="hidden md:flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <PlusSquare size={20} /> <span>Add Product</span>
            </a>
            <a href="/analysis" className="hidden md:flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <BarChart size={20} /> <span>Analysis</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative">
                <button onClick={() => setProfileDropdown(!profileDropdown)} className="flex items-center space-x-2">
                  <User size={24} className="text-gray-800" />
                </button>
                
                {profileDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 border">
                    <a href="/profile" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                      <User size={18} className="mr-2" /> Profile
                    </a>
                    <a href="/settings" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                      <Settings size={18} className="mr-2" /> Settings
                    </a>
                    <button onClick={handleLogout} className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50">
                      <LogOut size={18} className="mr-2" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-4">
                <a href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500">
                  Sign In
                </a>
                <a href="/signup" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500">
                  Sign Up
                </a>
              </div>
            )}
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-md p-4">
            <a href="/" className="block text-gray-800 hover:text-blue-600 py-2">Home</a>
            <a href="/products" className="block text-gray-800 hover:text-blue-600 py-2">Products</a>
            <a href="/product-form" className="block text-gray-800 hover:text-blue-600 py-2">Add Product</a>
            <a href="/analysis" className="block text-gray-800 hover:text-blue-600 py-2">Analysis</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
