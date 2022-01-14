const { response } = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

/**
 * 
 * @returns Model For Coupon Collection
 */
module.exports.getCouponsCollection = function () {
    const couponsCollection = mongoose.Schema({
        'couponCode':{type:String},
        'createdOn':Date,
        'expiryDate':Date,
        'minimumAmount':Number,
        'couponType':String,
        'discount':Number
    });
    return mongoose.model("coupons", couponsCollection);
};

module.exports.fetchCoupon = function(response,CouponModel, couponCode){
    CouponModel.find({'couponCode':couponCode},function(err,coupon){
        if(err){
            response.send(err);
        }
        else{
            response.json(coupon);
        }
    })
}