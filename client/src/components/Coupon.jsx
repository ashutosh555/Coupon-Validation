import {React} from 'react';

function Coupon(props){
    const coupon = props['coupon']
    return (
            <tr>
                <td>{coupon['couponCode']}</td>
                <td>{coupon['minimumAmount']}</td>
                <td> {coupon['couponType']}</td>
                <td>{coupon['discount']}</td>
                <td>{coupon['createdOn']}</td>
                <td>{coupon['expiryDate']}</td>
            </tr>
    )
}

export default Coupon