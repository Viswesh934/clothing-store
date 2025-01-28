import React, {useState} from "react";



const Navbar=()=>{
    const [isopen, setisopen]=useState(false)
    return(
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            <div>
            <div className="hidden md:flex space-x-6">
            <a href="/home" className="text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="/products" className="text-gray-800 hover:text-blue-600">
              About
            </a>
            <a href="/analysis" className="text-gray-800 hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </a>

            <button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-500">
                Sign in
            </button>
          </div>
            </div>
            </div>
            </div>


        </nav>


        
    )

}

export default Navbar
    