import React from "react";
import Navbar from "./navbar";

const Analysis = () => {

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Navbar />
            <h1 className="text-4xl font-bold text-blue-600 text-center mt-8">Analysis</h1>
            <div className="container mx-auto px-4 flex items-center justify-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                    <div className="flex items-center justify-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Analysis</h1>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                <span>Choose a product</span>
                            </label>
                            <select
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="">Select a product</option>
                                <option value="1">Product 1</option>
                                <option value="2">Product 2</option>
                                <option value="3">Product 3</option>
                                <option value="4">Product 4</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                        >
                            <span>Generate Analysis</span>
                        </button>
                    </form>
                </div>
        </div>
        </div>
    )
}

export default Analysis;