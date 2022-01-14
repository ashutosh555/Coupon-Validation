/**
 * returns payable amount after applying coupon on totalAmount
 */
function applyCoupon(coupons,totalAmount){
    let res = {
        'payableAmount':totalAmount,
        'couponCode':null,
        'couponType':null,
        'discount':0,
        'couponStatus':null
    }
    //Invalid coupon
    if(coupons.length == 0){
        res['couponStatus']='Invalid Coupon'
        return res;
    }
    
    let coupon = coupons[0];
    res['couponCode'] = coupon['couponCode'];

    //coupon is expired
    let expiryDate = coupon['expiryDate'];
    if(Date.now() > expiryDate)
    {
        res['couponStatus']='Coupon is Expired'
        return res;
    }

    //totalAmount less than minimumAmount
    let minimumAmount = coupon['minimumAmount']
    if(totalAmount < minimumAmount){
        res['couponStatus']='Coupon cannot be applied'
        return res;
    }

    let payableAmount = totalAmount;
    let couponType = coupon['couponType']
    let discount = coupon['discount']
    res['couponType'] = couponType;
    res['discount'] = discount;
    //FLAT discount
    if(couponType === "FLAT")
    {
        payableAmount -= discount
    }
    else
    {
        //percentage discount
        let discountPercentage = parseFloat(discount)
        payableAmount -= payableAmount*discountPercentage/100
        payableAmount = payableAmount.toFixed(2)
    }
    payableAmount = Math.max(0,payableAmount);
    res['payableAmount'] = payableAmount
    let amountSaved = totalAmount - payableAmount
    amountSaved = amountSaved.toFixed(2)
    res['couponStatus'] = "you saved Rs "+ amountSaved
    return res;
}
module.exports = applyCoupon

