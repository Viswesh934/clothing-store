//form for a product discounting system

import React, { Component } from "react";
import { useState } from 'react'


function Product(){
    const [product, setProduct] = useState("");
    const [discount,setDiscount] = useState(0);
    const [price,setPrice] = useState(0);
    const [discounttype,setDiscounttype] = useState("");

    const handleproduct = (e) => {
        setProduct(e.target.value);
    }
    const handlediscount = (e) => {
        setDiscount(e.target.value);
    }

    const handleprice = (e) => {
        setPrice(e.target.value);
    }
    const handlediscounttype = (e) => {
        setDiscounttype(e.target.value);
    }

    return(
        <div>
            <h1>Product discounting system</h1>
            <form>
                <div>
                <label>Product type</label>
                <label>Branded</label>
                <input type="radio" value="branded" name="product" onChange={handleproduct}/>
                <input type="radio" value="unbranded" name="product" onChange={handleproduct}/>
                <label>Unbranded</label>
                </div>
                
        {product === "branded" && (
          <div>
            <label>Brand</label>
            <select>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
              <option value="reebok">Reebok</option>
            </select>
          </div>
        )}

        {product === "unbranded" && (
            <div>
                <label>UnBranded</label>
                <select>
                    <option value="unbranded1">Unbranded1</option>
                    <option value="unbranded2">Unbranded2</option>
                    <option value="unbranded3">Unbranded3</option>
                </select>
            </div>
        )}

        <div>
            <label>Price</label>
            <input type="text" onChange={handleprice}/>
        </div>

        <div>
            <label>Quantity</label>
            <input type="number" id="quantity" name="quantity"/>
        </div>

        <div>
            <select value={discounttype} onChange={handlediscounttype}>
                <option value="">select discount type</option>
                <option value="percentage">Percentage</option>
                <option value="amount">Amount</option>
                <option value="Bogo">Bogo</option>
                <option value="seasonal">Seasonal</option>
                </select>

            {discounttype === "percentage" && (
            <div>
                <label>Discount</label>
                <input type="number" onChange={handlediscount}/>
            </div>
            )}

            {discounttype === "amount" && (
            <div>
                <label>Discount</label>
                <label>Minimum amount</label>
                <input type="number" onChange={handlediscount}/>
                </div>
            )}

            {discounttype === "Bogo" && (
            <div>
                <label>Buy</label>
                <input type="number" id="buy" name="buy"/>
                <label>Get</label>
                <input type="number" id="get" name="get"/>
            </div>
            )}
            {discounttype === "seasonal" && (
                <div>
                    <label>Season</label>
                    <select>
                        <option value="summer">Summer</option>
                        <option value="winter">Winter</option>
                        <option value="spring">Spring</option>
                        <option value="fall">Fall</option>
                    </select>
                    <label>start date</label>
                    <input type="date" id="start" name="start"/>
                    <label>end date</label>
                    <input type="date" id="end" name="end"/>

                    <label>Discount percentage</label>
                    <input type="number" id="discount" name="discount"/>
                    </div>
                    
                )}
            


        </div>
        


        </form>
        </div>


    
    )}

export default Product;
