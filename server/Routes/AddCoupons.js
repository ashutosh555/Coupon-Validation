const express = require("express"); 
const app = require('../index')
const router = express.Router();

router.post('/add-coupon',(req,res)=>{
    const CouponModel = app.CouponModel
    //coupon info
    let newCoupon = {
      'couponCode':req.body['couponCode'],
      'createdOn':Date.now(),
      'minimumAmount':req.body['minimumAmount'],
      'expiryDate':req.body['expiryDate'],
      'couponType':req.body['couponType'],
      'discount':parseFloat(req.body['discount'])
    }
    //update if coupon already exists else add a new coupon
    CouponModel.updateOne({'couponCode': req.body['couponCode']},
    {
      $set: newCoupon
    }
    ,{upsert : true},(err)=>{
        if(err)
        {
          console.log(err);
          res.send(err);
        }
        else res.send("success")
      }
    );
});

module.exports = router;