import React, { useState } from "react";
import Navbar from "./navbar";

const LoginForm=()=>{
    const [email,setemail]=useState("")
    const [password, setpassword]=useState("")
    const [isloggedin, setisloggedin]=useState(false)
    const [iserror, setiserror]=useState(false)

    const handleemail=(e)=>{
        setemail(e.target.value)
    }
    const handlepassword=(e)=>{
        setpassword(e.target.value)
    }

    return(
        <div className="flex flex-col min-h-screen bg-gray-200">
            <Navbar />

        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

                <form className="space y-6">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" value={email} onChange={handleemail} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"></input>

                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" value={password} onChange={handlepassword} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"></input>

                    <button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-500">
                        Login
                    </button>
                    <label className="block text-sm font-medium text-gray-700">Don't have an account?</label>
                    <a href="/signup">Signup</a>
                   
                    </form>
                    </div>
                    </div>
           </div>
    )}

    export default LoginForm;