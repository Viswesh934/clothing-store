import React from "react";
import { LogIn, UserPlus } from "lucide-react";

import Navbar from "./navbar";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Simplify Your Discount Management
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          An easy way to manage discounts and promotions for your clothing store.
        </p>
        <div className="flex space-x-4">
          <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <LogIn className="w-5 h-5 mr-2" /><a href="/login"> Login</a>
          </button>
          <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <UserPlus className="w-5 h-5 mr-2" /> <a href="/signup">Sign Up</a>
          </button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>&copy; 2024 Discount Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
