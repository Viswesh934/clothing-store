import React,{useState} from "react";

const Signupform=()=>{
    const [name, setname]=useState("")
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")

    const handlename=(e)=>{
        setname(e.target.value)
    }
    const handleemail=(e)=>{
        setemail(e.target.value)
    }
    const handlepassword=(e)=>{
        setpassword(e.target.value)
    }

return(
    <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Signup</h1>

            <form className="space y-6">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" value={name} onChange={handlename} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"></input>

                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" value={email} onChange={handleemail} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"></input>

                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" value={password} onChange={handlepassword} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"></input>

                <button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-500">
                    Signup
                </button>
                </form>
                </div>
                </div>

)}

export default Signupform;
