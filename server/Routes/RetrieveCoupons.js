const express = require("express"); 
const app = require('../index')
const router = express.Router();

router.get('/retrieve-coupons',(req,res)=>{
    const CouponModel = app.CouponModel
    CouponModel.find({},(err,coupons)=>{
      if(err)
      {
        res.json(err);
      }else{
        res.json(coupons);
      }
      
    })
});

module.exports = router;
  