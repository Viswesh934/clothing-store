import React, { useState } from "react";
import Navbar from "./navbar";
import { createorupdateproduct } from "../services/productservices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Product() {
  const [product, setProduct] = useState("");
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(0);
  const [discounttype, setDiscounttype] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");


  const handleproduct = (e) => {
    setProduct(e.target.value);
  };
  const handlediscount = (e) => {
    setDiscount(e.target.value);
  };
  const handleprice = (e) => {
    setPrice(e.target.value);
  };
  const handlediscounttype = (e) => {
    setDiscounttype(e.target.value);
  };

  const handlebrand = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productdata = {
      name: e.target[0].value,
      brand: selectedBrand || "unbranded",
      price: price,
      isBranded: product === "branded",
      discountType: discounttype,
      discountValue: discount,
      buyX: e.target[6]?.value,
      getY: e.target[7]?.value,
      season: e.target[8]?.value,
      startDate: e.target[9]?.value,
      endDate: e.target[10]?.value,
      modifiedById: 1,
    };

    try {
      const response = await createorupdateproduct(productdata);
      toast.success('Product Successfully Created/Updated', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      setTimeout(() => window.location.reload(), 3500);
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br sm:px-6">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">Product Discounting System</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
           
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Product Type</label>
              <div className="mt-2 flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="branded"
                    name="product"
                    onChange={handleproduct}
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2">Branded</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="unbranded"
                    name="product"
                    onChange={handleproduct}
                    className="form-radio h-4 w-4 text-indigo-600"
                  />
                  <span className="ml-2">Unbranded</span>
                </label>
              </div>
            </div>

            {product === "branded" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Brand</label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value={selectedBrand}
                onChange={handlebrand}
                >
                  <option value="nike">Nike</option>
                  <option value="adidas">Adidas</option>
                  <option value="reebok">Reebok</option>
                </select>
              </div>
            )}

          
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="text"
                onChange={handleprice}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Discount Type</label>
              <select
                value={discounttype}
                onChange={handlediscounttype}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required
              >
                <option value="">Select discount type</option>
                <option value="Not applicable">Not applicable</option>
                <option value="percentage">Percentage</option>
                <option value="amount">Amount</option>
                <option value="Bogo">Bogo</option>
                <option value="seasonal">Seasonal</option>
              </select>
            </div>

            {discounttype === "percentage" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Discount Percentage</label>
                <input
                  type="number"
                  onChange={handlediscount}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  min={0}
                  required
                />
              </div>
            )}

              {discounttype === "amount" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Discount Amount</label>
                <input
                  type="number"
                  onChange={handlediscount}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  min={0}
                  required
                />
              </div>
            )}

       
            {discounttype === "Bogo" && (
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Buy X Get Y</label>
                <div className="flex space-x-4">
                  <input
                    type="number"
                    id="buy"
                    name="buy"
                    placeholder="Buy"
                    className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm"
                    required
                  />
                  <input
                    type="number"
                    id="get"
                    name="get"
                    placeholder="Get"
                    className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm"
                    required
                  />
                </div>
              </div>
            )}

       
            {discounttype === "seasonal" && (
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Seasonal Discount</label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required>
                  <option value="summer">Summer</option>
                  <option value="winter">Winter</option>
                  <option value="spring">Spring</option>
                  <option value="fall">Fall</option>
                </select>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                      type="date"
                      id="start"
                      name="start"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                    <input
                      type="date"
                      id="end"
                      name="end"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>
                </div>
                <input
                  type="number"
                  id="discount"
                  name="discount"
                  placeholder="Discount Percentage"
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            )}

         
            <div>
              <label className="block text-sm font-medium text-gray-700">Applicable Locations</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                <option value="All">All</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
              </select>
            </div>

           
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit Product
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Product;