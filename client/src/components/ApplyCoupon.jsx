import React from 'react';
import { useState,useEffect } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/ApplyCoupon.css';

toast.configure()
const ApplyCoupon = () => {
    //state variables
    const [payableAmount,setPayableAmount] = useState();
    const [showCart,setShowCart] = useState(false);
    const [couponType,setCouponType] = useState();
    const [discount, setDiscount] = useState();
    const [couponStatus, setCouponStatus] = useState();
    const [formData, updateFormData] = useState({
        'totalAmount':"",
        'couponCode':""
    })

    //update document title
    useEffect(() => {
        document.title = 'Apply Your Coupon'
    }, []);

    //handles changes in formData state
    const handleChange = (e) => {
        updateFormData({
          ...formData,
          [e.target.name]: e.target.value.trim()
        });
    };

    //call backend to apply coupon
    const applyCoupon = (e) => {
        e.preventDefault()
        toast.success('Applying coupon!! Please wait')
        const applyCouponRequestOptions = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        };
        fetch('api/apply-coupon',applyCouponRequestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            toast.success('coupon applied')
            setPayableAmount(data['payableAmount'])
            setShowCart(true);
            setCouponType(data['couponType'])
            setDiscount(data['discount'])
            setCouponStatus(data['couponStatus'])
        })
        .catch((error) => {
            toast.error('Error occured')
            console.error('Error:', error);
        });
    };

    //render HTML
    return (
        <div>
            <div className="container overflow-auto">
                <div className="row" style ={{margin:"40px"}}>
                    <div className="col">
                        <h1>Apply Your Coupon</h1>
                        <form onSubmit={applyCoupon}>
                            <label>Total Amount </label> 
                            <input type = "number" required name="totalAmount" onChange={handleChange}
                            className="form-control"/> 
                            <label>Enter Coupon Code </label> 
                            <input type = "text" required name="couponCode" onChange={handleChange}
                             className="form-control"/>

                            <button
                            className="btn btn-success applyCouponButton">Apply Coupon</button>
                        </form> 
                    </div>
                    {showCart &&
                    <div className="col">
                        <h1>Cart</h1>
                        <div className ="cart">
                            <h2>Total Payable Amount: {payableAmount}</h2>
                            <h2>Discount: {couponType} {discount}</h2>
                            <h2>Coupon Status: {couponStatus}</h2>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ApplyCoupon