const express = require("express"); 
const app = require('../index')
const router = express.Router();
const applyCoupon = require('../utils/applyCoupon')

router.post('/apply-coupon',(req,res)=>{
    const CouponModel = app.CouponModel
    const couponCode = req.body['couponCode']
    const totalAmount = req.body['totalAmount']
    CouponModel.find({'couponCode':couponCode},(err,coupons)=>{
      if(err)
      {
        res.send('error occured please try again')
      }
      else{
        let result = applyCoupon(coupons,totalAmount);
        res.json(result)
      }
    })
  });

module.exports = router;