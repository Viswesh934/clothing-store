import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Navbar from "./navbar";
import { getproducts, getproductsbyname } from "../services/productservices";

const Productlist = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        if (search.trim() !== "") {
            handleSearch();
        } else {
            fetchProducts();
        }
    }, [search]);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await getproductsbyname(search);
            setProducts(response.data);
        } catch (error) {
            fetchProducts();
            setLoading(false);
        }
        setLoading(false);
    };

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await getproducts();
            setProducts(response.data);
        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="container mx-auto px-4 py-8">
                {/* Navbar and Search Bar */}
                <div className="flex flex-col items-center mb-8">
                    <Navbar />
                    <div className="flex items-center space-x-4 mt-4 w-full max-w-md">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search products..."
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                        >
                            <Search size={20} />
                        </button>
                    </div>
                </div>

                {/* Product List */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : products.length ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h1 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h1>
                                <p className="text-gray-600 mb-1">Price: ${product.price}</p>
                                <p className="text-gray-600">Category: {product.category}</p>
                                <p className="text-gray-600">Brand: {product.brand}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No products found</p>
                )}
            </div>
        </div>
    );
};

export default Productlist;